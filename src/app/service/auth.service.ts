import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = true;
  constructor(private httpService: HttpClient) { }


  isAuthenticated() {
    // return new Promise(
    //   (resolve, reject) => {
    //   setTimeout(() => { 
    //     resolve(this.loggedIn)
    //    }, 800);
    // });

    return new Promise(
      (resolve, reject) => {
      if(window.localStorage.getItem("loginId")!=undefined)
      {
        return resolve(true);
      }
      return resolve(false);
    });
  }

  login(userId: string, pwd: string) {
    //this.loggedIn = true;
    let header = new HttpHeaders();
    let params = new HttpParams();
    header.append('Contetnt-Type', 'application/json');

    params = params.set("userName", userId);
    params = params.set("password", pwd);

    let requestOptions = { headers: header, params: params };
    return this.httpService.get<string>(environment.ApiService + "/auth", requestOptions).pipe(tap(x => {
      window.localStorage.setItem("loginId", x);
      // if (x == "Ok") {
      //   window.localStorage.setItem("loginId", x);
      // }
      // else {
      //   window.localStorage.removeItem("loginId");
      // }
    }));

  }
  logout() {
    window.localStorage.removeItem("loginId");
  }
}
