import { Component } from '@angular/core';
import { StudentFees } from '../../interfaces/student-fees';
import { CommonModule } from '@angular/common';
import { ApiResponsePayment } from '../../interfaces/payment';
import { Page, Pagination } from '../../interfaces/pagination';
import { PaymentService } from '../../services/payment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  selector: 'app-student-fees',
  standalone: true,
  imports: [CommonModule, LoadingComponent],
  templateUrl: './student-fees.component.html',
  styleUrl: './student-fees.component.scss'
})
export class StudentFeesComponent {
  payments: ApiResponsePayment[] = []
  payments_paginated: ApiResponsePayment[] = []
  pagination: Pagination;
  loading: boolean = false;
  noData: boolean = false;

  constructor(
    private paymentService: PaymentService,
  ) {
    this.pagination = {
      tota_entities: 0,
      total_pages: 0,
      per_page: 20,
      from: 0,
      to: 0,
      current_page: 1,
      first_page: 1,
      last_page: 1,
      pages: []
    }
  }

  ngOnInit() {
    this.loading = true;
    this.paymentService.getAllPayments().subscribe({
      next: (response) => {
        this.payments = response
        if (this.payments.length > 0) {
          this.noData = false;
          this.payments_paginated = [...this.payments.reverse()]
          this.pagination.total_pages = Math.ceil(this.payments.length / this.pagination.per_page)
          this.pagination.last_page = this.pagination.total_pages
          this.calculatePage(this.pagination.current_page)
        }
        else {
          this.noData = true
        }
        this.loading = false;
      }
    });
  }

  calculatePage(page: number) {
    this.pagination.current_page = page
    this.pagination.from = this.pagination.per_page * page - this.pagination.per_page;
    this.pagination.to = this.pagination.per_page * page;
    this.payments_paginated = this.payments.slice(this.pagination.from, this.pagination.to)
    this.pagination.pages = []
    for (let i = 1; i <= this.pagination.total_pages; i++) {
      const page: Page = {
        number: i
      }
      this.pagination.pages.push(page)
    }
  }


}
