import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiResponseGrade } from '../../interfaces/grade';
import { GradeService } from '../../services/grade.service';
import { LoadingComponent } from '../../components/loading/loading.component';
import { FormsModule, NgForm } from '@angular/forms';
import { ApiRequestGroup } from '../../interfaces/group';
import { GroupService } from '../../services/group.service';
import { PeriodService } from '../../services/period.service';

@Component({
  selector: 'app-detail-grade',
  standalone: true,
  imports: [RouterModule, LoadingComponent, FormsModule],
  templateUrl: './detail-grade.component.html',
  styleUrl: './detail-grade.component.scss'
})
export class DetailGradeComponent {
  grade: ApiResponseGrade
  groupRequest: ApiRequestGroup
  loading: boolean = false;
  loadingRequest: boolean = false
  alertFailRequest: boolean = false;


  constructor(
    private service: GradeService,
    private groupService: GroupService,
    private periodService: PeriodService,
    public route: ActivatedRoute,
    public router: Router
  ) {
    this.grade = {
      id: 0,
      name: '',
      periodId: 0,
      groups: [],

    }
    this.groupRequest = {
      name: '',
      capacity: 0,
      gradeId: 0,
    }
    this.restoreGroupRequest()
  }

  restoreGroupRequest() {
    this.route.params.subscribe(params => {
      this.grade.id = Number(params['id']);
      this.groupRequest = {
        name: '',
        capacity: 0,
        gradeId: this.grade.id,
      }
    });
  }

  ngOnInit(): void {
    this.loading = true;
    this.service.getById(this.grade.id).subscribe(response => {
      this.grade = response
      this.periodService.getById(this.grade.periodId).subscribe(response => {
        this.grade.period = response
        this.loading = false;
        this.getGroupsByGrade()
      })
    })
  }

  getGroupsByGrade() {
    this.loading = true;
    this.groupService.getAll().subscribe(responseGroup => {
      this.grade.groups = responseGroup.filter(group => group.gradeId === this.grade.id)
      this.loading = false
    })
  }


  onSubmit(form: NgForm) {
    this.loadingRequest = true;
    this.alertFailRequest = false;
    this.groupService.create(this.groupRequest).subscribe({
      next: (response) => {
        this.alertFailRequest = false;
        this.loadingRequest = false;
        this.restoreGroupRequest()
        this.getGroupsByGrade()
      },
      error: (e) => {
        this.alertFailRequest = true;
        this.loadingRequest = false;
      }
    })
  }
}
