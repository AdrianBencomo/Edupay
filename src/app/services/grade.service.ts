import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseStudent } from '../interfaces/student';
import { API_URL } from '../../constants/url';
import { ApiRequestGrade, ApiResponseGrade } from '../interfaces/grade';

@Injectable({
    providedIn: 'root'
})
export class GradeService {

    constructor(
        private http: HttpClient
    ) {

    }

    public getAll(): Observable<ApiResponseGrade[]> {
        return this.http.get<ApiResponseGrade[]>(`${API_URL}/Grades`)
    }

    public getById(id: number): Observable<ApiResponseGrade> {
        return this.http.get<ApiResponseGrade>(`${API_URL}/Grades/${id}`)
      }

    public create(data: ApiRequestGrade): Observable<ApiResponseGrade> {
        return this.http.post<ApiResponseGrade>(`${API_URL}/Grades`, data);
    }

}
