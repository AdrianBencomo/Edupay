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
import { AllPeriodComponent } from '../../views/all-period/all-period.component';
import { AllGradeComponent } from '../../views/all-grade/all-grade.component';
import { AllGroupComponent } from '../../views/all-group/all-group.component';
import { FormPeriodComponent } from '../../views/form-period/form-period.component';
import { DetailPeriodComponent } from '../../views/detail-period/detail-period.component';
import { DetailGradeComponent } from '../../views/detail-grade/detail-grade.component';
import { PaymentPeriodComponent } from '../../views/payment-period/payment-period.component';
import { EditStudentComponent } from '../../views/edit-student/edit-student.component';

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
        path: 'add-student/:idParent',
        component: FormStudentComponent
      },
      {
        path: 'edit-student/:id',
        component: EditStudentComponent
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
        path: 'detail-period/:id',
        component: DetailPeriodComponent
      },
      {
        path: 'detail-grade/:id',
        component: DetailGradeComponent
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
      {
        path: 'all-period',
        component: AllPeriodComponent
      },
      {
        path: 'add-period',
        component: FormPeriodComponent
      },
      {
        path: 'all-grade',
        component: AllGradeComponent
      },
      {
        path: 'all-group',
        component: AllGroupComponent
      },
      {
        path: 'payment-period/:idParent/:idChildren',
        component: PaymentPeriodComponent
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
