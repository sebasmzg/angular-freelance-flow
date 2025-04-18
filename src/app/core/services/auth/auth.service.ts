import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, map} from 'rxjs';
import {AuthResponse, JwtUser} from '../../../shared/models/user.model';
import {parseJwt} from '../../helpers/jwt-helper';
import {Router} from '@angular/router';
import {enviroment} from '../../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl = `${enviroment.apiUrl}/login`;

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string): Observable<{ user: JwtUser }> {
    return this.http.post<AuthResponse>(this.baseUrl, { email, password }).pipe(
      map((res)=>{
        this.saveToken(res.token);
        const payload = parseJwt(res.token);
        return {user: payload?.user};
      })
    );
  }

  register(name: string, email: string, password: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.baseUrl}/register`, { name, email, password });
  }

  private saveToken(token: string){
    localStorage.setItem('token', token);
  }

  getToken():string {
    return localStorage.getItem('token') || '';
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}
