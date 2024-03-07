import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { API_URL } from '../../constants/url';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {

  }

  public userById(): Observable<User> {
    return this.http.get<User>(`${API_URL}/UsersId`)
  }
}
