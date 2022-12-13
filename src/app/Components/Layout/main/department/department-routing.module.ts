import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../main.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';


const routes: Routes = [
    {
        path: 'add-department',
        component: AddDepartmentComponent
    },
    {
        path: 'update-department',
        component: UpdateDepartmentComponent
    },
    {
        path: 'department-list',
        component: DepartmentListComponent
    }
  ];


  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    providers: []
  })

  export class DepartmentRoutingModule { }
