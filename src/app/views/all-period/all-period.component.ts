import { Component } from '@angular/core';
import { ApiResponsePeriod } from '../../interfaces/period';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PeriodService } from '../../services/period.service';
import { LoadingComponent } from '../../components/loading/loading.component';
import { Page, Pagination } from '../../interfaces/pagination';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-period',
  standalone: true,
  imports: [RouterModule, LoadingComponent, CommonModule],
  templateUrl: './all-period.component.html',
  styleUrl: './all-period.component.scss'
})
export class AllPeriodComponent {
  periods: ApiResponsePeriod[] = []
  periods_paginated: ApiResponsePeriod[] = []
  pagination: Pagination;
  loading: boolean = false;
  noData: boolean = false;

  constructor(
    private periodService: PeriodService,
    public route: ActivatedRoute,
    public router: Router
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
    this.periodService.getAll().subscribe({
      next: (response) => {
        this.periods = response
        if (this.periods.length > 0) {
          this.noData = false;
          this.periods_paginated = [...this.periods]
          this.pagination.total_pages = Math.ceil(this.periods.length / this.pagination.per_page)
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
    this.periods_paginated = this.periods.slice(this.pagination.from, this.pagination.to)
    this.pagination.pages = []
    for (let i = 1; i <= this.pagination.total_pages; i++) {
      const page: Page = {
        number: i
      }
      this.pagination.pages.push(page)
    }
  }


}
