import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AllStudentComponent } from '../../views/all-student/all-student.component';
import { FormStudentComponent } from '../../views/form-student/form-student.component';
import { DetailStudentComponent } from '../../views/detail-student/detail-student.component';
import { PromotionStudentComponent } from '../../views/promotion-student/promotion-student.component';
import { AllParentComponent } from '../../views/all-parent/all-parent.component';
import { DetailParentComponent } from '../../views/detail-parent/detail-parent.component';
import { DetailTeacherComponent } from '../../views/detail-teacher/detail-teacher.component';
import { AllTeacherComponent } from '../../views/all-teacher/all-teacher.component';
import { FormTeacherComponent } from '../../views/form-teacher/form-teacher.component';
import { FeesGroupComponent } from '../../views/fees-group/fees-group.component';
import { StudentFeesComponent } from '../../views/student-fees/student-fees.component';
import { AllExpenseComponent } from '../../views/all-expense/all-expense.component';
import { FormExpenseComponent } from '../../views/form-expense/form-expense.component';
import { AllSubjectComponent } from '../../views/all-subject/all-subject.component';
import { SettingsComponent } from '../../views/settings/settings.component';
import { DashboardComponent } from '../../views/dashboard/dashboard.component';
import { FormParentComponent } from '../../views/form-parent/form-parent.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
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
      },
      {
        path: 'all-parent',
        component: AllParentComponent
      },
      {
        path: 'add-parent',
        component: FormParentComponent
      },
      {
        path: 'detail-parent',
        component: DetailParentComponent
      },
      {
        path: 'all-teacher',
        component: AllTeacherComponent
      },
      {
        path: 'add-teacher',
        component: FormTeacherComponent
      },
      {
        path: 'detail-teacher',
        component: DetailTeacherComponent
      },
      {
        path: 'fees-group',
        component: FeesGroupComponent
      },
      {
        path: 'student-fees',
        component: StudentFeesComponent
      },
      {
        path: 'all-expense',
        component: AllExpenseComponent
      },
      {
        path: 'add-expense',
        component: FormExpenseComponent
      },
      {
        path: 'all-subject',
        component: AllSubjectComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },

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
