import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Teacher } from '../../interfaces/teacher';

@Component({
  selector: 'app-all-teacher',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './all-teacher.component.html',
  styleUrl: './all-teacher.component.scss'
})
export class AllTeacherComponent {
  teachers: Teacher[] = []

  ngOnInit() {
    for (let i = 22; i <= 34; i++) {
      const newItem: Teacher = {
        id: i,
        name: 'Adrian Lorenzo',
        gender: 'Male',
        class: 2,
        subject: 'English',
        address: '59 Australia, Sydney',
        birthday: '02/05/2001',
        phone: '+ 123 9988568'
      }
      this.teachers.push(newItem)
    }
  }
}
