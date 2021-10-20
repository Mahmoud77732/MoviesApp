import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, CanActivate {

  showItems: boolean = true;

  constructor(private _Router: Router) { }

  ngOnInit(): void {
  }

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let token = localStorage.getItem("token");
    if(token){
      return true;
    }
    else{
      return false;
    }
  }

  logout(){
    localStorage.removeItem("token");
    this._Router.navigateByUrl("/login");
  }

}
