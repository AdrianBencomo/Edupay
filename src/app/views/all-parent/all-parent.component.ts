import { Component } from '@angular/core';
import { Parent } from '../../interfaces/parent';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-parent',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './all-parent.component.html',
  styleUrl: './all-parent.component.scss'
})
export class AllParentComponent {
  parents: Parent[] = []

  ngOnInit() {
    for (let i = 22; i <= 34; i++) {
      const newItem: Parent = {
        id: i,
        name: 'Steve Lopez',
        gender: 'Male',
        occupation: 'Banker',
        address: '59 Australia, Sydney',
        email: 'arabagrant@gmail.com',
        phone: '+ 123 9988568'
      }
      this.parents.push(newItem)
    }
  }
}
