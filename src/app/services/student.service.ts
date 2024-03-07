import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseStudent} from '../interfaces/student';
import { API_URL } from '../../constants/url';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private http: HttpClient
  ) {

  }

  public getAll(): Observable<ApiResponseStudent[]> {
    return this.http.get<ApiResponseStudent[]>(`${API_URL}/AllChildrens`)
  }

}
