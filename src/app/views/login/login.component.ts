import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LoginRequest } from '../../interfaces/login';
import { AuthService } from '../../services/auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, LoadingComponent],
  providers: [HttpClient],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginRequest: LoginRequest;
  alertFailRequest: boolean = false;
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    public route: ActivatedRoute,
    public router: Router
  ) {
    this.loginRequest = {
      Email: '',
      Password: ''
    }
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.loading = true;
    this.alertFailRequest = false;
    this.authService.login(this.loginRequest).subscribe({
      next: (response) => {
        this.alertFailRequest = false;
        this.authService.saveToken(response.token)
        this.loading = false;
        this.router.navigate(['/admin/dashboard'], { relativeTo: this.route });
      },
      error: (e) => {
        this.alertFailRequest = true;
        this.loading = false;
      }
    })
  }

}
