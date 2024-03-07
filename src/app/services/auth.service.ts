import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../constants/url';
import { LoginRequest, LoginResponse } from '../interfaces/login';
import { Observable } from 'rxjs';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) {

  }

  public login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${API_URL}/login`, data);
  }

  public saveToken(token: string) {
    localStorage.setItem("token", token);
  }

  public getToken() {
    return localStorage.getItem("token") || ''
  }
  
}
