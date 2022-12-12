import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeComponent } from './employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
    {
        path: 'add-employee',
        component: AddEmployeeComponent
    },
    {
        path: 'update-employee',
        component: UpdateEmployeeComponent
    },
    {
        path: '',
        component: EmployeeComponent
    }
  ];


  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    providers: []
  })

  export class EmployeeRoutingModule { }
