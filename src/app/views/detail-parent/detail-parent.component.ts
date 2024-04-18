import { Component } from '@angular/core';
import { ApiResponseParent } from '../../interfaces/parent';
import { ParentService } from '../../services/parent.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-detail-parent',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './detail-parent.component.html',
  styleUrl: './detail-parent.component.scss'
})
export class DetailParentComponent {
  parent: ApiResponseParent;
  formData: FormData = new FormData()
  myImage: string = ''
  alertSaveImageSuccess: boolean = false;
  alertSaveImageError: boolean = false;

  constructor(
    private parentService: ParentService,
    private userService: UserService,
  ) {
    this.parent = {
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
      occupation: '',
      address: '',
      phone: '',
      tutorados: []
    }
  }

  ngOnInit(): void {
    this.parent = this.parentService.getEntityInStorage()
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
    this.userService.saveImage(this.formData, this.parent.id).subscribe({
      next: (response) => {
        this.parentService.saveEntityInStorage(response as ApiResponseParent)
        this.alertSaveImageSuccess = true;
      },
      error: (e) => {
        this.alertSaveImageError = true;
      }
    })
  }

  goToPaymentPeriod(studentId: number) {

  }

}
