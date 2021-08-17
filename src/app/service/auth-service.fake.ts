import { Injectable } from '@angular/core';


import { Observable, of } from 'rxjs';
import { IAuthService } from './iauth.service';

@Injectable()
export class AuthServiceFake implements IAuthService {

    loggedIn = true;
    constructor() {


    }

    isAuthenticated(): Observable<boolean> {
        return of(this.loggedIn);
    }
    login(userId: string, pwd: string): Observable<any> {
        return of(this.loggedIn);
    }
    logout() {
        this.loggedIn = false;
    }

    

}