import { Component , OnInit} from '@angular/core';
import { Department } from 'src/app/Model/department.model';
import { DepartmentDataService } from 'src/app/Service/department-data.service';

import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments:Department[] = [];
  first = 0;
  rows = 10;
  cols: any[]=[];
  constructor(
    private departmentData: DepartmentDataService,
    private titleService : Title){
    this.titleService.setTitle('Department | List')
  }


  ngOnInit() {
    this.departmentData.getAllDepartments().subscribe({
      next: (department) => {
        this.departments = department;
      },
      error:(response) => {
        console.log(response);
      }
    })
    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' }
  ];
  }
  onDelete(department_id:string){
    console.log(department_id);
    this.departmentData.deleteDepartment(department_id).subscribe((response:any) => {
      console.log(response);
    });
  }

  next() {
    this.first = this.first + this.rows;
}

prev() {
    this.first = this.first - this.rows;
}

reset() {
    this.first = 0;
}

isLastPage(): boolean {
    return this.departments ? this.first === (this.departments.length - this.rows): true;
}

isFirstPage(): boolean {
    return this.departments ? this.first === 0 : true;
}
}
