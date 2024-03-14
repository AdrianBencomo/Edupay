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
      Id: 0,
      DetailId: 0,
      Id_Group: 0,
      Id_tutor: 0,
      Name: '',
      Email: '',
      Password: '',
      Profile_Photo: '',
      Last_Name: '',
      Firs_Name: '',
      Rol: '',
      refreshToken: '',
      TutorOf: {
        Id: 0,
        BirthDay: '',
        DetailId: 0,
        Id_Group: 0,
        Id_tutor: 0,
        Name: '',
        Email: '',
        Password: '',
        Profile_Photo: '',
        Last_Name: '',
        Firs_Name: '',
        Rol: '',
        refreshToken: ''
      }
    }
  }

  ngOnInit(): void {
    this.parent = this.parentService.getEntityInStorage()
  }

}
