import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseParent } from '../interfaces/parent';
import { API_URL } from '../../constants/url';

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

}
