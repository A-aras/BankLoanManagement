import { Observable } from 'rxjs';

export interface IAuthService {

    isAuthenticated(): Observable<boolean>;

    login(userId: string, pwd: string): Observable<any>;

    logout();
}
