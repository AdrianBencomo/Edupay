import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseStudent} from '../interfaces/student';
import { API_URL } from '../../constants/url';
import { ApiRequestGroup, ApiResponseGroup } from '../interfaces/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(
    private http: HttpClient
  ) {

  }

  public getAll(): Observable<ApiResponseGroup[]> {
    return this.http.get<ApiResponseGroup[]>(`${API_URL}/Group`)
  }

  public create(data: ApiRequestGroup): Observable<ApiResponseGroup> {
    return this.http.post<ApiResponseGroup>(`${API_URL}/Group`, data);
  }
}
