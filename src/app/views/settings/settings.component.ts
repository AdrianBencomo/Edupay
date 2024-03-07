import { Component } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule, LoadingComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  user: User;
  loading: boolean = false;

  constructor(
    private userService: UserService
  ) {
    this.user = {
      Id: 0,
      Id_Group: 0,
      DetailId: 0,
      Profile_Photo: '',
      Firs_Name: '',
      Last_Name: '',
      Id_tutor: 0,
      Email: '',
      Password: '',
      Name: '',
      Rol: '',
      refreshToken: ''
    }
  }

  ngOnInit() {
    this.loading = true;
    this.userService.userById().subscribe({
      next: (response) => {
        this.user = response
        this.loading = false;
      }
    })
  }
}
