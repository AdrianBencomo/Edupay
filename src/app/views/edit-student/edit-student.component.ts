import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LoadingComponent } from '../../components/loading/loading.component';
import { ApiRequestStudent } from '../../interfaces/student';
import { StudentService } from '../../services/student.service';
import { UserService } from '../../services/user.service';
import { GroupService } from '../../services/group.service';
import { PeriodService } from '../../services/period.service';
import { GradeService } from '../../services/grade.service';
import { ApiResponseGroup } from '../../interfaces/group';
import { ParentService } from '../../services/parent.service';
import { ApiResponseParent } from '../../interfaces/parent';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [RouterModule, FormsModule, LoadingComponent],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.scss'
})
export class EditStudentComponent {
  studentRequest: ApiRequestStudent = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    role: 'STUDENT',
    image: '',
    occupation: '',
    address: '',
    phone: '',
    groupId: 0,
    tutorId: 0
  }
  alertFailRequest: boolean = false;
  loading: boolean = false;
  groups: ApiResponseGroup[]
  parents: ApiResponseParent[]
  studentId: number;


  constructor(
    private studentService: StudentService,
    private periodService: PeriodService,
    private gradeService: GradeService,
    private groupService: GroupService,
    private parentService: ParentService,
    public route: ActivatedRoute,
    public router: Router
  ) {
    this.groups = []
    this.parents = []
    this.studentId = 0;
    this.restoreEntityAndForm()
  }

  restoreEntityAndForm() {
    this.studentRequest = {
      name: '',
      lastName: '',
      email: '',
      password: '',
      role: 'STUDENT',
      image: '',
      occupation: '',
      address: '',
      phone: '',
      groupId: 0,
      tutorId: 0
    }
    this.route.params.subscribe(params => {
      this.studentId = Number(params['id']);
    });
  }

  ngOnInit() {
    this.studentService.getAll().subscribe(response => {
      this.studentRequest = response.find(x => x.id == this.studentId) as unknown as ApiRequestStudent
    })
    this.periodService.getAll().subscribe(responsePeriods => {
      this.gradeService.getAll().subscribe(responseGrades => {
        this.groupService.getAll().subscribe(responseGroups => {
          this.groups = responseGroups
          responseGrades.forEach(grade => grade.period = responsePeriods.find(period => grade.periodId == period.id))
          this.groups.forEach(group => group.grade = responseGrades.find(grade => group.gradeId == grade.id))
        })
      })
    })
    this.parentService.getAll().subscribe(responseParent => this.parents = responseParent)

  }

  onSubmit(form: NgForm) {
    this.loading = true;
    this.alertFailRequest = false;
    this.studentService.update(this.studentRequest, this.studentId).subscribe({
      next: (response) => {
        this.alertFailRequest = false;
        this.loading = false;
        this.studentService.saveEntityInStorage(response)
        this.router.navigate(['/admin/detail-student'], { relativeTo: this.route });
      },
      error: (e) => {
        this.alertFailRequest = true;
        this.loading = false;
      }
    })
  }


}
