import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiResponsePeriod } from '../../interfaces/period';
import { PeriodService } from '../../services/period.service';
import { GradeService } from '../../services/grade.service';
import { ApiRequestGrade } from '../../interfaces/grade';
import { LoadingComponent } from '../../components/loading/loading.component';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-detail-period',
  standalone: true,
  imports: [RouterModule, LoadingComponent, FormsModule],
  templateUrl: './detail-period.component.html',
  styleUrl: './detail-period.component.scss'
})
export class DetailPeriodComponent {
  period: ApiResponsePeriod
  gradeRequest: ApiRequestGrade
  loading: boolean = false;
  loadingRequest: boolean = false
  alertFailRequest: boolean = false;


  constructor(
    private service: PeriodService,
    private gradeService: GradeService,
    public route: ActivatedRoute,
    public router: Router
  ) {
    this.period = {
      id: 0,
      name: '',
      price: '',
      startDate: '',
      endDate: '',
      stripeProductId: '',
      stripeSubscriptionId: 0,
      planId: '',
      cancelAtEnd: false,
      grades: []
    }
    this.gradeRequest = {
      name: '',
      periodId: 0,
    }
    this.restoreGradeRequest()
  }

  restoreGradeRequest() {
    this.route.params.subscribe(params => {
      this.period.id = Number(params['id']);
      this.gradeRequest = {
        name: '',
        periodId: this.period.id
      }
    });
  }

  ngOnInit(): void {
    this.loading = true;
    this.service.getById(this.period.id).subscribe(response => {
      this.period = response
      this.loading = false;
      this.getGradesByPeriod()
    })
  }

  getGradesByPeriod() {
    this.loading = true;
    this.gradeService.getAll().subscribe(responseGrade => {
      this.period.grades = responseGrade.filter(grade => grade.periodId === this.period.id)
      this.loading = false
    })
  }

  onSubmit(form: NgForm) {
    this.loadingRequest = true;
    this.alertFailRequest = false;
    this.gradeService.create(this.gradeRequest).subscribe({
      next: (response) => {
        this.alertFailRequest = false;
        this.loadingRequest = false;
        this.restoreGradeRequest()
        this.getGradesByPeriod()
      },
      error: (e) => {
        this.alertFailRequest = true;
        this.loadingRequest = false;
      }
    })
  }
}
