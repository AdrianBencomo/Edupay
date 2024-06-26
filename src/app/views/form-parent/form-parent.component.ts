import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LoadingComponent } from '../../components/loading/loading.component';
import { UserService } from '../../services/user.service';
import { PeriodService } from '../../services/period.service';
import { GradeService } from '../../services/grade.service';
import { GroupService } from '../../services/group.service';
import { ApiResponseGroup } from '../../interfaces/group';
import { ApiRequestParent } from '../../interfaces/parent';
import { ParentService } from '../../services/parent.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-form-parent',
  standalone: true,
  imports: [RouterModule, FormsModule, LoadingComponent],
  templateUrl: './form-parent.component.html',
  styleUrl: './form-parent.component.scss'
})
export class FormParentComponent {
  parentRequest: ApiRequestParent = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    role: 'FATHER',
    image: '',
    occupation: '',
    address: '',
    phone: '',
    groupId: 1,
    tutorId: 1
  }
  alertFailRequest: boolean = false;
  loading: boolean = false;
  groups: ApiResponseGroup[]
  formData: FormData = new FormData()
  isUpdate: boolean;

  constructor(
    private userService: UserService,
    private parentService: ParentService,
    private periodService: PeriodService,
    private gradeService: GradeService,
    private groupService: GroupService,
    public route: ActivatedRoute,
    public router: Router
  ) {
    this.groups = []
    this.restoreEntityAndForm()
    this.isUpdate = this.parentService.existsEntityInStorage()
    if (this.isUpdate) {
      const updateEntity = this.parentService.getEntityInStorage()
      this.parentRequest = {
        name: updateEntity.name,
        lastName: updateEntity.lastName,
        email: updateEntity.email,
        password: updateEntity.password,
        role: 'FATHER',
        occupation: updateEntity.occupation,
        address: updateEntity.address,
        phone: updateEntity.phone,
        groupId: updateEntity.groupId,
        tutorId: updateEntity.tutorId,
        profilePhoto: updateEntity.profilePhoto,
        image: updateEntity.image,
      }
    }
  }

  restoreEntityAndForm() {
    this.formData = new FormData();
    this.parentRequest = {
      name: '',
      lastName: '',
      email: '',
      password: '',
      role: 'FATHER',
      image: '',
      occupation: '',
      address: '',
      phone: '',
      groupId: 0,
      tutorId: 0
    }


  }

  ngOnInit() {
    this.periodService.getAll().subscribe(responsePeriods => {
      this.gradeService.getAll().subscribe(responseGrades => {
        this.groupService.getAll().subscribe(responseGroups => {
          this.groups = responseGroups
          responseGrades.forEach(grade => grade.period = responsePeriods.find(period => grade.periodId == period.id))
          this.groups.forEach(group => group.grade = responseGrades.find(grade => group.gradeId == grade.id))
          console.log(this.groups)
        })
      })
    })
  }

  onSubmit(form: NgForm) {
    this.loading = true;
    this.alertFailRequest = false;
    if (this.isUpdate) {
      const updateEntity = this.parentService.getEntityInStorage()
      this.parentService.update(this.parentRequest, updateEntity.id).subscribe({
        next: (response) => {
          this.alertFailRequest = false;
          this.loading = false;
          this.parentService.removeEntityInStorage()
          this.router.navigate(['/admin/all-parent'], { relativeTo: this.route });
        },
        error: (e) => {
          this.alertFailRequest = true;
          this.loading = false;
        }
      })
    }
    else {
      this.generateFormData()
      this.userService.create(this.formData).subscribe({
        next: (response) => {
          this.alertFailRequest = false;
          this.loading = false;
          this.parentService.removeEntityInStorage()
          this.router.navigate(['/admin/all-parent'], { relativeTo: this.route });
        },
        error: (e) => {
          this.alertFailRequest = true;
          this.loading = false;
        }
      })
    }
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

  generateFormData() {
    Object.entries(this.parentRequest).forEach(([key, value]) => {
      if (key !== 'image') {
        this.formData.delete(key)
      }
      this.formData.append(key, value);
    });
  }

}
