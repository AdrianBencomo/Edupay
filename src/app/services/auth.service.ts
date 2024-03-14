import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../constants/url';
import { LoginRequest, LoginResponse } from '../interfaces/login';
import { Observable } from 'rxjs';
import { Student } from '../interfaces/student';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    public route: ActivatedRoute,
    public router: Router
  ) {

  }

  public login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${API_URL}/login`, data);
  }

  public logOut(){
    localStorage.removeItem("token");
    this.router.navigate(['/'], { relativeTo: this.route });

  }

  public saveToken(token: string) {
    localStorage.setItem("token", token);
  }

  public getToken() {
    return localStorage.getItem("token") || ''
  }
  
}
