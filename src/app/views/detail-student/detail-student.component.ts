import { Component } from '@angular/core';
import { ApiResponseStudent } from '../../interfaces/student';
import { StudentService } from '../../services/student.service';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detail-student',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './detail-student.component.html',
  styleUrl: './detail-student.component.scss'
})
export class DetailStudentComponent {
  student: ApiResponseStudent;
  formData: FormData = new FormData()
  myImage: string = ''
  alertSaveImageSuccess: boolean = false;
  alertSaveImageError: boolean = false;

  constructor(
    private studentService: StudentService,
    private userService: UserService,

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

  getFile(event: Event) {
    const target = event.target as HTMLInputElement;
    const files: FileList | null = target.files;

    if (files && files.length > 0) {
      const file = files[0];
      this.formData.delete('image')
      this.formData.append('image', file);

      const reader = new FileReader();

      reader.onload = () => {
        const previewDiv = document.getElementById('image-preview');
        if (previewDiv) {
          previewDiv.style.backgroundImage = `url('${reader.result}')`;
        }
      };

      reader.readAsDataURL(file);
    }
  }

  saveImage() {
    this.alertSaveImageError = false;
    this.alertSaveImageSuccess = false;
    this.userService.saveImage(this.formData, this.student.id).subscribe({
      next: (response) => {
        this.studentService.saveEntityInStorage(response as ApiResponseStudent)
        this.alertSaveImageSuccess = true;
      },
      error: (e) => {
        this.alertSaveImageError = true;
      }
    })
  }
}
