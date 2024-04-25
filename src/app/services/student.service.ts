import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRequestStudent, ApiResponseStudent} from '../interfaces/student';
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

  public saveEntityInStorage(entity: ApiResponseStudent) {
    localStorage.setItem("student", JSON.stringify(entity))
  }

  public getEntityInStorage() {
    return JSON.parse(localStorage.getItem("student") ?? '')
  }

  public update(data: ApiRequestStudent, id: number): Observable<ApiResponseStudent> {
    return this.http.put<ApiResponseStudent>(`${API_URL}/Users/${id}`, data);
  }

}
