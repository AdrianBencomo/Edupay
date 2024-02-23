import { Component } from '@angular/core';
import { Subject } from '../../interfaces/subject';

@Component({
  selector: 'app-all-subject',
  standalone: true,
  imports: [],
  templateUrl: './all-subject.component.html',
  styleUrl: './all-subject.component.scss'
})
export class AllSubjectComponent {
  subjects: Subject[] = []
  

  ngOnInit() {
    for (let i = 1; i <= 9; i++) {
      const newItem: Subject = {
        id: i,
        name: i % 2 == 0 ? 'English' : i % 3 == 0 ? 'Science' : 'Maths',
        teacher: 'Daniel Grant',
        classes: '1,2&4',
        days: 'Mon, Tue and Fri',
      }
      this.subjects.push(newItem)
    }
  }
}
