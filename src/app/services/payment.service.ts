import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../constants/url';
import { PaymentNotification, PaymentPeriod } from '../interfaces/payment';

@Injectable({
    providedIn: 'root'
})
export class PaymentService {

    constructor(
        private http: HttpClient
    ) {

    }

    public createPaymentPeriod(data: PaymentPeriod): Observable<PaymentPeriod> {
        return this.http.post<PaymentPeriod>(`${API_URL}/payment`, data);
    }

    public createPaymentNotification(data: PaymentNotification): Observable<PaymentNotification> {
        return this.http.post<PaymentNotification>(`${API_URL}/notification`, data);
    }

}
