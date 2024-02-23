import { Component } from '@angular/core';
import { FeesGroup } from '../../interfaces/fees-group';

@Component({
  selector: 'app-fees-group',
  standalone: true,
  imports: [],
  templateUrl: './fees-group.component.html',
  styleUrl: './fees-group.component.scss'
})
export class FeesGroupComponent {
  feesGroups: FeesGroup[] = [
    {
      id: 1,
      name: 'Creche Fees',
      type: `
      Feeding Fee - GHS200.00
      Maintenance - GHS100.00
      Tuition - GHS350.00`,
      description: `To be paid every
      semester`
    },
    {
      id: 2,
      name: 'Nurse Fee Group',
      type: `Feeding Fee - GHS15.00
      Maintenance - GHS100.00
      Tuition - GHS450.00`,
      description: `To be paid every
      semester`
    },
    {
      id: 3,
      name: 'Kindergarten Fee Group',
      type: `Feeding Fee - GHS180.00
      Maintenance - GHS120.00
      Tuition - GHS500.00`,
      description: `To be paid every
      semester`
    },
    {
      id: 4,
      name: 'Class 1 Fee Group',
      type: `Feeding Fee - GHS100.00
      PTA - GHS150.00
      Computer Fees - GHS150.00
      Tuition - GHS500.00`,
      description: `To be paid every
      semester`
    },
    {
      id: 5,
      name: 'Class 2 Fee Group',
      type: `Feeding Fee - GHS100.00
      PTA - GHS150.00
      Computer Fees - GHS150.00
      Tuition - GHS500.00`,
      description: `To be paid every
      semester`
    },
  ]

}
