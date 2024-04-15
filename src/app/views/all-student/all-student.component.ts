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
  studentsExxample: ApiResponseStudent[] = [
    {
      id: 1,
      address: "Av 121",
      DetailId: 1,
      groupId: 1,
      tutorId: 1,
      name: 'Stephen',
      email: 'step@gmail.com',
      password: '',
      profilePhoto: '',
      lastName: 'Sanchez',
      role: '',
      refreshToken: ''
    },
    {
      id: 2,
      address: "Av 121",
      DetailId: 2,
      groupId: 1,
      tutorId: 2,
      name: "Jessica",
      email: "jessica@example.com",
      password: "",
      profilePhoto: "",
      lastName: "Gonzalez",
      role: "",
      refreshToken: ""
    },
    {
      id: 3,
      address: "Av 121",
      DetailId: 3,
      groupId: 1,
      tutorId: 3,
      name: "Michael",
      email: "michael@example.com",
      password: "",
      profilePhoto: "",
      lastName: "Johnson",
      role: "",
      refreshToken: ""
    },
    {
      id: 4,
      address: "Av 121",
      DetailId: 4,
      groupId: 1,
      tutorId: 4,
      name: "Emily",
      email: "emily@example.com",
      password: "",
      profilePhoto: "",
      lastName: "Martinez",
      role: "",
      refreshToken: ""
    },
    {
      id: 5,
      address: "Av 121",
      DetailId: 5,
      groupId: 1,
      tutorId: 5,
      name: "Daniel",
      email: "daniel@example.com",
      password: "",
      profilePhoto: "",
      lastName: "Rodriguez",
      role: "",
      refreshToken: ""
    },
    {
      id: 6,
      address: "Av 121",
      DetailId: 6,
      groupId: 1,
      tutorId: 6,
      name: "Sarah",
      email: "sarah@example.com",
      password: "",
      profilePhoto: "",
      lastName: "Lee",
      role: "",
      refreshToken: ""
    },
    {
      id: 7,
      address: "Av 121",
      DetailId: 7,
      groupId: 1,
      tutorId: 7,
      name: "David",
      email: "david@example.com",
      password: "",
      profilePhoto: "",
      lastName: "Wang",
      role: "",
      refreshToken: ""
    },
    {
      id: 8,
      address: "Av 121",
      DetailId: 8,
      groupId: 1,
      tutorId: 8,
      name: "Sophia",
      email: "sophia@example.com",
      password: "",
      profilePhoto: "",
      lastName: "Brown",
      role: "",
      refreshToken: ""
    },
    {
      id: 9,
      address: "Av 121",
      DetailId: 9,
      groupId: 1,
      tutorId: 9,
      name: "Ethan",
      email: "ethan@example.com",
      password: "",
      profilePhoto: "",
      lastName: "Nguyen",
      role: "",
      refreshToken: ""
    },
    {
      id: 10,
      address: "Av 121",
      DetailId: 10,
      groupId: 1,
      tutorId: 10,
      name: "Isabella",
      email: "isabella@example.com",
      password: "",
      profilePhoto: "",
      lastName: "Garcia",
      role: "",
      refreshToken: ""
    },
    {
      id: 11,
      address: "Av 121",
      DetailId: 11,
      groupId: 1,
      tutorId: 11,
      name: "Alexander",
      email: "alexander@example.com",
      password: "",
      profilePhoto: "",
      lastName: "Kim",
      role: "",
      refreshToken: ""
    },
    {
      id: 12,
      address: "Av 121",
      DetailId: 12,
      groupId: 1,
      tutorId: 12,
      name: "Mia",
      email: "mia@example.com",
      password: "",
      profilePhoto: "",
      lastName: "Lopez",
      role: "",
      refreshToken: ""
    },
    {
      id: 13,
      address: "Av 121",
      DetailId: 13,
      groupId: 1,
      tutorId: 13,
      name: "William",
      email: "william@example.com",
      password: "",
      profilePhoto: "",
      lastName: "Hernandez",
      role: "",
      refreshToken: ""
    },
    {
      id: 14,
      address: "Av 121",
      DetailId: 14,
      groupId: 1,
      tutorId: 14,
      name: "Olivia",
      email: "olivia@example.com",
      password: "",
      profilePhoto: "",
      lastName: "Smith",
      role: "",
      refreshToken: ""
    },
    {
      id: 15,
      address: "Av 121",
      DetailId: 15,
      groupId: 1,
      tutorId: 15,
      name: "James",
      email: "james@example.com",
      password: "",
      profilePhoto: "",
      lastName: "Jones",
      role: "",
      refreshToken: ""
    },
    {
      id: 16,
      address: "Av 121",
      DetailId: 16,
      groupId: 1,
      tutorId: 16,
      name: "Charlotte",
      email: "charlotte@example.com",
      password: "",
      profilePhoto: "",
      lastName: "Williams",
      role: "",
      refreshToken: ""
    }
  ]

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
          this.noData = false;
          this.students_paginated = [...this.students]
          this.pagination.total_pages = Math.ceil(this.students.length / this.pagination.per_page)
          this.pagination.last_page = this.pagination.total_pages
          this.calculatePage(this.pagination.current_page)
        }
        else {
          this.students = this.studentsExxample
          this.students_paginated = [...this.students]
          this.pagination.total_pages = Math.ceil(this.students.length / this.pagination.per_page)
          this.pagination.last_page = this.pagination.total_pages
          this.calculatePage(this.pagination.current_page)
          // this.noData = true
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
