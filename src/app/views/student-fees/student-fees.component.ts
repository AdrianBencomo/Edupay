import { Component } from '@angular/core';
import { StudentFees } from '../../interfaces/student-fees';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-fees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-fees.component.html',
  styleUrl: './student-fees.component.scss'
})
export class StudentFeesComponent {
  studentFees: StudentFees[] = []

  ngOnInit() {
    for (let i = 22; i <= 34; i++) {
      const newItem: StudentFees = {
        id: i,
        name: 'Daniel Grant',
        gender: 'Male',
        class: 2,
        amount: 2000000,
        status: i % 2 == 0 ? 'unpaid' : 'Paid',
        parent_email: 'arabagrant@gmail.com',
        parent_phone: '+ 123 9988568'
      }
      this.studentFees.push(newItem)
    }
  }

}
