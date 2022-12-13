import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatNativeDateModule} from '@angular/material/core';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './header.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: '',
        component: MainComponent,
      },
      {
        path: 'employee',
        loadChildren: () =>
          import('../main/employee/employee.module').then(
            (m) => m.EmployeeModule
          ),
      },
      {
        path: 'department',
        loadChildren: () =>
          import('../main/department/department.module').then(
            (m) => m.DepartmentModule
          ),
      },
      {
        path: 'job',
        loadChildren: () =>
          import('../main/job/job.module').then((m) => m.JobModule),
      },
    ],
  },
];
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    RouterModule.forChild(routes),
  ],
})
export class HeaderModule {}
