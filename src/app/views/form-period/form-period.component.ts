import { Component } from '@angular/core';
import { ApiRequestPeriod } from '../../interfaces/period';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { LoadingComponent } from '../../components/loading/loading.component';
import { PeriodService } from '../../services/period.service';

@Component({
  selector: 'app-form-period',
  standalone: true,
  imports: [RouterModule, FormsModule, LoadingComponent],
  templateUrl: './form-period.component.html',
  styleUrl: './form-period.component.scss'
})
export class FormPeriodComponent {
  periodRequest: ApiRequestPeriod = {
    name: '',
    price: 0,
    startDate: '',
    endDate: ''
  }
  alertFailRequest: boolean = false;
  loading: boolean = false;

  constructor(
    private service: PeriodService,
    public route: ActivatedRoute,
    public router: Router
  ) {
    this.restoreEntity()
  }

  restoreEntity() {
    this.periodRequest = {
      name: '',
      price: 0,
      startDate: '',
      endDate: ''
    }
  }

  onSubmit(form: NgForm) {
    this.loading = true;
    this.alertFailRequest = false;
    this.service.create(this.periodRequest).subscribe({
      next: (response) => {
        this.alertFailRequest = false;
        this.loading = false;
        this.router.navigate(['/admin/all-period'], { relativeTo: this.route });
      },
      error: (e) => {
        this.alertFailRequest = true;
        this.loading = false;
      }
    })
  }



}
