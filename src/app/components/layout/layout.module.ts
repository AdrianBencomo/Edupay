import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AllStudentComponent } from '../../views/all-student/all-student.component';
import { FormStudentComponent } from '../../views/form-student/form-student.component';
import { DetailStudentComponent } from '../../views/detail-student/detail-student.component';
import { PromotionStudentComponent } from '../../views/promotion-student/promotion-student.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'all-student',
        component: AllStudentComponent
      },
      {
        path: 'add-student',
        component: FormStudentComponent
      },
      {
        path: 'detail-student',
        component: DetailStudentComponent
      },
      {
        path: 'promotion-student',
        component: PromotionStudentComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class LayoutModule { }
