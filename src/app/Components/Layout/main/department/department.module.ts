import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateDepartmentComponent } from './update-department/update-department.component';
import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentListComponent } from './department-list/department-list.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DepartmentRoutingModule
  ],
  exports: [RouterModule],
    providers: []
})
export class DepartmentModule { }
