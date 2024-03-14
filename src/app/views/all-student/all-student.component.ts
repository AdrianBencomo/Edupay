import { Component, OnInit } from '@angular/core';
import { ApiResponseStudent, Student } from '../../interfaces/student';
import { RouterModule } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { LoadingComponent } from '../../components/loading/loading.component';
import { Page, Pagination } from '../../interfaces/pagination';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-student',
  standalone: true,
  imports: [RouterModule, LoadingComponent, CommonModule,],
  templateUrl: './all-student.component.html',
  styleUrl: './all-student.component.scss'
})
export class AllStudentComponent implements OnInit {
  students: ApiResponseStudent[] = []
  students_paginated: ApiResponseStudent[] = []
  pagination: Pagination;
  loading: boolean = false;
  noData: boolean = false;

  constructor(
    private studentService: StudentService
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
    this.studentService.getAll().subscribe({
      next: (response) => {
        this.students = response
        if (this.students.length > 0) {
          this.students.forEach(student => {
            student.BirthDay = '02/05/2001'
          })
          this.noData = false;
          this.students_paginated = [...this.students]
          this.pagination.total_pages = Math.ceil(this.students.length / this.pagination.per_page)
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
    this.students_paginated = this.students.slice(this.pagination.from, this.pagination.to)
    this.pagination.pages = []
    for (let i = 1; i <= this.pagination.total_pages; i++) {
      const page: Page = {
        number: i
      }
      this.pagination.pages.push(page)
    }
  }
}
