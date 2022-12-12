import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { JobComponent } from './job/job.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { AddDepartmentComponent } from './department/add-department/add-department.component';
import { AddJobsComponent } from './job/add-jobs/add-jobs.component';
import { UpdateJobComponent } from './job/update-job/update-job.component';
import { MainRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [
    EmployeeComponent,
    DepartmentComponent,
    JobComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    AddDepartmentComponent,
    AddJobsComponent,
    UpdateJobComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
