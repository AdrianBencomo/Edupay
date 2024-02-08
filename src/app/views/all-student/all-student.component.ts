import { Component, OnInit } from '@angular/core';
import { Student } from '../../interfaces/student';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-student',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './all-student.component.html',
  styleUrl: './all-student.component.scss'
})
export class AllStudentComponent implements OnInit {
  students: Student[] = []

  ngOnInit() {
    for (let i = 22; i <= 34; i++) {
      const newItem: Student = {
        id: i,
        name: 'Daniel Lopez',
        gender: 'Male',
        class: 1,
        parents: 'Steve Lopez',
        address: '59 Australia, Sydney',
        birthday: '02/05/2001',
        phone: '+ 123 9988568'
      }
      this.students.push(newItem)
    }
  }
}
