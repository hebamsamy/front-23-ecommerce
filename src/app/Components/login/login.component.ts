import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/IProduct';
import { AccountService } from 'src/app/Services/account.service';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  passType: string = "password";
  returnedUrl = "/home"
  constructor(private builder: FormBuilder, 
    private accountSrv: AccountService,
    private router:Router,
    private activateRoute:ActivatedRoute,
    private wishSrv:WishlistService) {
    this.form = this.builder.group({
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })

    this.activateRoute.params.subscribe({
      next:(prams)=>{
        this.returnedUrl = prams["returnRrl"]
        console.log(this.returnedUrl)
      }
    })
  }
  change() {
    this.passType = (this.passType == "password") ? 'text' : 'password'
  }
  send() {
    if (this.form.valid) {
      console.log(this.form.value)
      this.accountSrv.login(this.form.controls["email"].value,this.form.controls["password"].value)
        .subscribe({
          next: (reponse) => {
            console.log(reponse)

            if(reponse.success){
              this.accountSrv.setuser(reponse.data.token,reponse.data.user.name)
              this.wishSrv.getAll().subscribe(
                (res)=>{
                  this.wishSrv.setInStorage(res.data as IProduct[])
                }
              )
              this.router.navigateByUrl(this.returnedUrl)
            }else{
              alert(reponse.message)
            }
          }
        })

    }}
}
