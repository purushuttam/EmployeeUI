import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { DepartmentListComponent } from './department-list.component';
import { DepartmentDataService } from 'src/app/Service/department-data.service';


@NgModule({
  declarations: [DepartmentListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  bootstrap: [DepartmentListComponent],
    providers: [DepartmentDataService]
})
export class DepartmentListModule { }
