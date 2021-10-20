import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    'first_name': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
    'last_name': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(8)]) //Validators.pattern(/^[a-z][0-9]{3,}$/) --->  ex: m123
  });

  constructor(private _AuthService: AuthService, private _Router: Router) {

  }

  ngOnInit(): void { }

  register(){
    if(this.registerForm.invalid){
      return;
    }
    console.log("registerForm.value = \n", this.registerForm.value);
    this._AuthService.registerData(this.registerForm.value).subscribe(
      (response) => {
        if(response.message == 'success'){
          console.log("response from register()--> \n", response);
          this._Router.navigateByUrl('/login');
        }
        else{
          this.registerForm.reset;
          alert(response.message);
        }
      },
      (error) => {
        console.log("error from register() --> \n", error);
        alert("email found");
      }
    );
  }

}
