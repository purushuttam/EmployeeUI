import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent
  },
    {
        path: 'employee',
        loadChildren: () => import('../main/employee/employee.module').then(m => m.EmployeeModule)
    },
    {
        path: 'department',
        loadChildren: () => import('../main/department/department.module').then(m => m.DepartmentModule)
    },
    {
        path: 'job',
        loadChildren: () => import('../main/job/job.module').then(m => m.JobModule)
    }
  ];


  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    providers: []
  })

  export class MainRoutingModule { }
