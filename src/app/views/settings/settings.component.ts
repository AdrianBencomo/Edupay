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
      id: 0,
      groupId: 0,
      DetailId: 0,
      profilePhoto: '',
      lastName: '',
      tutorId: 0,
      email: '',
      password: '',
      name: '',
      role: '',
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
