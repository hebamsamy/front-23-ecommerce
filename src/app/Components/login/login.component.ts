import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  passType: string = "password";

  constructor(private builder: FormBuilder, private accountSrv: AccountService,private router:Router) {
    this.form = this.builder.group({
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
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
            if(reponse.success){
              console.log(reponse.data)
              this.accountSrv.setuser(reponse.data.token,reponse.data.user.name)
              this.router.navigateByUrl('/home')
            }else{
              alert(reponse.message)
            }
          }
        })

    }}
}
