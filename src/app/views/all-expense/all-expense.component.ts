import { Component } from '@angular/core';
import { Expense } from '../../interfaces/expense';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-expense',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-expense.component.html',
  styleUrl: './all-expense.component.scss'
})
export class AllExpenseComponent {
  expenses: Expense[] = []

  ngOnInit() {
    for (let i = 22; i <= 34; i++) {
      const newItem: Expense = {
        id: i,
        name: 'Daniel Grant',
        amount: 2000000,
        type: i % 2 == 0 ? 'Salary' : i % 3 == 0 ? 'Transport' : 'Utilities',
        status: i % 2 == 0 ? 'unpaid' : i % 3 == 0 ? 'Due' : 'Paid',
        parent_email: 'arabagrant@gmail.com',
        parent_phone: '+ 123 9988568',
        due_date: '02/02/2019',
      }
      this.expenses.push(newItem)
    }
  }
}
