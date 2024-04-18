import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { API_URL } from '../../constants/url';
import { ApiRequestStudent, ApiResponseStudent } from '../interfaces/student';

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

  public create(data: FormData): Observable<ApiResponseStudent> {
    return this.http.post<ApiResponseStudent>(`${API_URL}/Users`, data);
  }

  public saveImage(data: FormData, id: number): Observable<ApiResponseStudent> {
    return this.http.put<ApiResponseStudent>(`${API_URL}/UsersImage/${id}`, data);
  }


}
