import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LoadingComponent } from '../../components/loading/loading.component';
import { PaymentNotification, PaymentPeriod } from '../../interfaces/payment';
import { PaymentService } from '../../services/payment.service';
import { PeriodService } from '../../services/period.service';
import { ApiResponsePeriod } from '../../interfaces/period';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-payment-period',
  standalone: true,
  imports: [RouterModule, FormsModule, LoadingComponent],
  templateUrl: './payment-period.component.html',
  styleUrl: './payment-period.component.scss'
})
export class PaymentPeriodComponent {

  paymentRequest: PaymentPeriod = {
    periodId: null,
    userid: 0
  }

  notificationRequest: PaymentNotification = {
    userid: 0,
    hijoId: 0,
    periodId: 0,
    title: '',
    description: 'Usted tiene un pago pendiente de un periodo'
  }


  periods: ApiResponsePeriod[]
  loading: boolean = false;
  alertFailRequest: boolean = false;

  constructor(
    private service: PaymentService,
    private periodService: PeriodService,
    private studentService: StudentService,
    public route: ActivatedRoute,
    public router: Router
  ) {
    this.periods = [];
    this.route.params.subscribe(params => {
      this.paymentRequest.userid = Number(params['idParent']);
      this.notificationRequest.userid = Number(params['idParent']);
      this.notificationRequest.hijoId = Number(params['idChildren']);
    });
  }

  ngOnInit() {
    this.periodService.getAll().subscribe(response => this.periods = response)
  }

  onSubmit(form: NgForm) {
    this.loading = true;
    this.alertFailRequest = false;
    this.paymentRequest.periodId = Number(this.paymentRequest.periodId)
    this.service.createPaymentPeriod(this.paymentRequest).subscribe({
      next: (response) => {
        this.alertFailRequest = false;
        this.loading = false;
        this.notificationRequest.periodId = this.paymentRequest.periodId ?? 0
        this.periodService.getById(this.notificationRequest.periodId).subscribe(responsePeriod => {
          this.studentService.getAll().subscribe(responseStudent => {
            const myStudent = responseStudent.find(x => x.id == this.notificationRequest.hijoId)
            this.notificationRequest.title = `Pago pendiente de $${responsePeriod.price}`
            this.notificationRequest.description = `Inscripción del curso ${responsePeriod.name} (${responsePeriod.startDate?.slice(0, 4)}-${responsePeriod.endDate?.slice(0, 4)}) a ${myStudent?.name} ${myStudent?.lastName}`
            this.service.createPaymentNotification(this.notificationRequest).subscribe()
          })
        })
        this.router.navigate(['/admin/detail-parent'], { relativeTo: this.route });
      },
      error: (e) => {
        this.alertFailRequest = true;
        this.loading = false;
      }
    })
  }



}
