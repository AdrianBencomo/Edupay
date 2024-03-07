import { Component, OnInit } from '@angular/core';
import { ApiResponseStudent, Student } from '../../interfaces/student';
import { RouterModule } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  selector: 'app-all-student',
  standalone: true,
  imports: [RouterModule, LoadingComponent],
  templateUrl: './all-student.component.html',
  styleUrl: './all-student.component.scss'
})
export class AllStudentComponent implements OnInit {
  students: ApiResponseStudent[] = []
  loading: boolean = false;
  noData: boolean = false;

  constructor(
    private studentService: StudentService
  ) {

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
        }
        else {
          this.noData = true
        }
        this.loading = false;
      }
    });
  }
}
