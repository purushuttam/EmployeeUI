import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateDepartmentComponent } from './update-department/update-department.component';
import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentListComponent } from './department-list/department-list.component';



@NgModule({
  declarations: [
    UpdateDepartmentComponent,
    DepartmentListComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule
  ]
})
export class DepartmentModule { }
