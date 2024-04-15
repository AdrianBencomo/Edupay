import { Component } from '@angular/core';
import { ApiResponseStudent } from '../../interfaces/student';
import { StudentService } from '../../services/student.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detail-student',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detail-student.component.html',
  styleUrl: './detail-student.component.scss'
})
export class DetailStudentComponent {
  student: ApiResponseStudent;

  constructor(
    private studentService: StudentService
  ) {
    this.student = {
      id: 0,
      DetailId: 0,
      groupId: 0,
      tutorId: 0,
      name: '',
      email: '',
      password: '',
      profilePhoto: '',
      lastName: '',
      role: '',
      refreshToken: '',
      address: '',
      phone: ''
    }
  }

  ngOnInit(): void {
    this.student = this.studentService.getEntityInStorage()
  }
}
