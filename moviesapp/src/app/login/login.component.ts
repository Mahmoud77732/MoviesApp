import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(8)]) //Validators.pattern(/^[a-z][0-9]{3,}$/) --->  ex: m123
  });

  constructor(private _AuthService: AuthService, private _Router: Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this.loginForm.invalid){
      return;
    }
    this._AuthService.loginData(this.loginForm.value).subscribe(
      (response) => {
        if(response.message == 'success'){
          localStorage.setItem("token", response.token); //i know that someone is login by "token" value
          this._Router.navigateByUrl('/home');
        }
        else{
          alert(response.message);
        }
      },
      (error) => {
        console.log("error from register() --> \n", error);
      }
    );
  }

}
