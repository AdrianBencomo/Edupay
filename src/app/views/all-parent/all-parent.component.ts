import { Component } from '@angular/core';
import { ApiResponseParent, Parent } from '../../interfaces/parent';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ParentService } from '../../services/parent.service';
import { LoadingComponent } from '../../components/loading/loading.component';
import { Page, Pagination } from '../../interfaces/pagination';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-parent',
  standalone: true,
  imports: [RouterModule, LoadingComponent, CommonModule],
  templateUrl: './all-parent.component.html',
  styleUrl: './all-parent.component.scss'
})
export class AllParentComponent {
  parents: ApiResponseParent[] = []
  parents_paginated: ApiResponseParent[] = []
  pagination: Pagination;
  loading: boolean = false;
  noData: boolean = false;

  constructor(
    private parentService: ParentService,
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
    this.parentService.getAll().subscribe({
      next: (response) => {
        this.parents = response
        if (this.parents.length > 0) {
          this.noData = false;
          this.parents_paginated = [...this.parents.reverse()]
          console.log(this.parents_paginated)
          this.pagination.total_pages = Math.ceil(this.parents.length / this.pagination.per_page)
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
    this.parents_paginated = this.parents.slice(this.pagination.from, this.pagination.to)
    this.pagination.pages = []
    for (let i = 1; i <= this.pagination.total_pages; i++) {
      const page: Page = {
        number: i
      }
      this.pagination.pages.push(page)
    }
  }

  goToDetail(parent: ApiResponseParent){
    this.parentService.saveEntityInStorage(parent)
    this.router.navigate(['/admin/detail-parent'], { relativeTo: this.route });
  }

}
