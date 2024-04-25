import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../constants/url';
import { ApiResponsePayment, PaymentNotification, PaymentPeriod } from '../interfaces/payment';

@Injectable({
    providedIn: 'root'
})
export class PaymentService {

    constructor(
        private http: HttpClient
    ) {

    }

    public getAllPayments(): Observable<ApiResponsePayment[]> {
        return this.http.get<ApiResponsePayment[]>(`${API_URL}/payments`,);
    }

    public createPaymentPeriod(data: PaymentPeriod): Observable<PaymentPeriod> {
        return this.http.post<PaymentPeriod>(`${API_URL}/payment`, data);
    }

    public createPaymentNotification(data: PaymentNotification): Observable<PaymentNotification> {
        return this.http.post<PaymentNotification>(`${API_URL}/notification`, data);
    }

}
