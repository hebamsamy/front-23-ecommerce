import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup;
  passType = "password";
  constructor(private builder: FormBuilder, private accountSrv: AccountService,private router:Router) {
    //if edit form call database
    this.form = this.builder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phoneNumber: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(15)]],
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
      this.accountSrv.register(this.form.value as User)
        .subscribe({
          next: (reponse) => {
            if(reponse.success){
              //go to login com
              this.router.navigateByUrl('/login')
            }else{
              alert(reponse.message)
            }
          }
        })

    }


    //send info to back
  }
}
