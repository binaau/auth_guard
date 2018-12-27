import { Injectable } from '@angular/core';
import 'rxjs/operators';
import { Observable } from 'rxjs';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { map } from 'rxjs/operators';
import { Api } from '../state/Api';
import { Router } from '@angular/router';
import * as Toast from "nativescript-toast";
import { RouterExtensions } from 'nativescript-angular/router';


@Injectable()
export class LoginService {
  private static readonly CURRENT_USER = 'currentUser';
  private currentUser: any;

  constructor(private http: Http, private router: Router, private route: RouterExtensions) {
    this.currentUser = this.loadCurrentUser();
  }

  public loginByUsernameAndPassword(username: string, password: string, token_device: string): Observable<boolean> {
    let urlSearchParams = new URLSearchParams();

    urlSearchParams.append('username', username);
    urlSearchParams.append('password', password);
    urlSearchParams.append('token_device', token_device);
    urlSearchParams.append('user_uniqueIdid', '0');
    urlSearchParams.append('session_id', '0');
    let body = urlSearchParams.toString();
    let LS = require("nativescript-localstorage");
    console.log('body service')
    console.log(body)
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(Api.getUrl(Api.URLS.Login_mobile), body, {
      headers: headers
    })
      .pipe(map((response: Response) => {
        let res = response.json();
        if (res.StatusCode === 0 && res.Token) {
          this.currentUser = {
            username: username,
            token: res.Token,
            password: res.password
          }
          LS.setItem(LoginService.CURRENT_USER, JSON.stringify(this.currentUser));
              Toast.makeText('Authentificate successfully').show();
          return true;
        }
       else {
          return false;
        }
      }));
  }

  public isAuthenticated(): boolean {
    let LS = require("nativescript-localstorage");
    let currentUser: any = LS.getItem(LoginService.CURRENT_USER);
    if (currentUser !== null) {
      try {
        currentUser = JSON.parse(currentUser);
        if (!currentUser.username !== undefined && !currentUser.password !== undefined &&
          !currentUser.token !== undefined) {
          return true;
        }
      } catch (ex) {
      }
    }
    return false;
  }

  public logout(): void {
    let LS = require("nativescript-localstorage");
    LS.removeItem(LoginService.CURRENT_USER);
    this.route.navigate(['/test/login']);


  }

  public getCurrentUser(): any {
    return this.currentUser;
  }

  private loadCurrentUser(): any {
    let LS = require("nativescript-localstorage");
    let currentUser: any = LS.getItem(LoginService.CURRENT_USER);
    if (currentUser !== null) {
      try {
        currentUser = JSON.parse(currentUser);
        if (!currentUser.username !== undefined && !currentUser.password !== undefined &&
          !currentUser.token !== undefined) {
          return currentUser;
        }
      } catch (ex) {
      }
    }

    return null;
  }

}
