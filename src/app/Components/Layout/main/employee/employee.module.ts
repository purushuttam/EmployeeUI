import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [AddEmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    InputTextModule
  ]
})
export class EmployeeModule { }
