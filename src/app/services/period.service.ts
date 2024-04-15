import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../constants/url';
import { ApiRequestPeriod, ApiResponsePeriod } from '../interfaces/period';

@Injectable({
  providedIn: 'root'
})
export class PeriodService {

  constructor(
    private http: HttpClient
  ) {

  }

  public getAll(): Observable<ApiResponsePeriod[]> {
    return this.http.get<ApiResponsePeriod[]>(`${API_URL}/periodos`)
  }

  public getById(id: number): Observable<ApiResponsePeriod> {
    return this.http.get<ApiResponsePeriod>(`${API_URL}/periodos/${id}`)
  }

  public create(data: ApiRequestPeriod): Observable<ApiResponsePeriod> {
    return this.http.post<ApiResponsePeriod>(`${API_URL}/periodos`, data);
  }

}
