import { Component } from '@angular/core';
import { ApiResponseParent } from '../../interfaces/parent';
import { ParentService } from '../../services/parent.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detail-parent',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detail-parent.component.html',
  styleUrl: './detail-parent.component.scss'
})
export class DetailParentComponent {
  parent: ApiResponseParent;

  constructor(
    private parentService: ParentService
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
      TutorOf: {
        id: 0,
        BirthDay: '',
        DetailId: 0,
        groupId: 0,
        tutorId: 0,
        name: '',
        email: '',
        password: '',
        profilePhoto: '',
        lastName: '',
        role: '',
        refreshToken: ''
      }
    }
  }

  ngOnInit(): void {
    this.parent = this.parentService.getEntityInStorage()
  }

}
