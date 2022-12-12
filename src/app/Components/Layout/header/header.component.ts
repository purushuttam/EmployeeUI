import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  ngOnInit(){}
  items: MenuItem[];

    constructor() {
        this.items = [
            {
                label:'Employee',
                items:[
                    {
                        label:'Employee List',
                        routerLink: 'employee/employee-list'
                    },
                    {
                        label:'Add Employee',
                        routerLink: 'employee/add-employee'
                    },
                    {
                        label:'Update Employee',
                        routerLink: 'employee/update-employee'
                    }
                ]
            },
            {
                label:'Department',
                items:[
                    {
                        label:'Add New Department',
                        routerLink: 'department/add-department'
                    },
                    {
                        label:'Update Department',
                        routerLink: 'department/update-department'
                    },
                    {
                        label:'Department List',
                        routerLink: 'department/department-list'
                    },
                    {
                        label:'Justify',
                        routerLink: 'department/update-employee'
                    },

                ]
            },
            {
                label:'Jobs',
                items:[
                    {
                        label:'Add Job',
                        routerLink: 'job/add-job'

                    },
                    {
                        label:'Update Job',
                        routerLink: 'job/update-job'

                    },
                    {
                        label:'Job List',
                        routerLink: 'job/job-list'
                    }
                ]
            }
        ];
    }
}
