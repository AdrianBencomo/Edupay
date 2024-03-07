import { Component } from '@angular/core';
import { ApiResponseParent, Parent } from '../../interfaces/parent';
import { RouterModule } from '@angular/router';
import { ParentService } from '../../services/parent.service';
import { LoadingComponent } from '../../components/loading/loading.component';

@Component({
  selector: 'app-all-parent',
  standalone: true,
  imports: [RouterModule, LoadingComponent],
  templateUrl: './all-parent.component.html',
  styleUrl: './all-parent.component.scss'
})
export class AllParentComponent {
  parents: ApiResponseParent[] = []
  loading: boolean = false;
  noData: boolean = false;

  constructor(
    private parentService: ParentService
  ) {

  }

  ngOnInit() {
    this.loading = true;
    this.parentService.getAll().subscribe({
      next: (response) => {
        this.parents = response
        if (this.parents.length > 0) {
          this.noData = false;
        }
        else {
          this.noData = true
        }
        this.loading = false;
      }
    });
  }
}
