import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRequestParent, ApiResponseParent, Parent } from '../interfaces/parent';
import { API_URL } from '../../constants/url';
import { ApiResponseStudent } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(
    private http: HttpClient
  ) {

  }

  public getAll(): Observable<ApiResponseParent[]> {
    return this.http.get<ApiResponseParent[]>(`${API_URL}/fathers`)
  }

  public saveEntityInStorage(entity: ApiResponseParent) {
    localStorage.setItem("parent", JSON.stringify(entity))
  }

  public removeEntityInStorage() {
    localStorage.removeItem("parent")
  }

  public getEntityInStorage() {
    return JSON.parse(localStorage.getItem("parent") ?? '')
  }

  public existsEntityInStorage(): boolean {
    return localStorage.getItem("parent") ? true : false
  }

  public update(data: ApiRequestParent, id: number): Observable<ApiResponseStudent> {
    return this.http.put<ApiResponseStudent>(`${API_URL}/Users/${id}`, data);
  }

}
