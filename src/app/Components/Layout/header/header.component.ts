import { Component , OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    items!: MenuItem[];
    ngOnInit(): void {
        this.items = [
            {
                label:'Employee',
                items:[
                    {
                        label:'Add Employee',
                        routerLink: ['/employee/add-employee'],
                    },
                    {
                        label:'Update Employee',
                        routerLink: ['/employee/update-employee']
                    },
                    {
                        label:'Employee List',
                        routerLink: ['/employee/employee-list']
                    }
                ]
            },
            {
                label:'Department',
                items:[
                    {
                        label:'Add New Department',
                        routerLink: ['/department/add-department']
                    },
                    {
                        label:'Update Department',
                        routerLink: ['/department/update-department']
                    },
                    {
                        label:'Department List',
                        routerLink: ['/department/department-list']
                    }
                ]
            },
            {
                label:'Job',
                items:[
                    {
                        label:'Add Job',
                        routerLink: ['/job/add-job']
                    },
                    {
                        label:'Update Job',
                        routerLink: ['/job/update-job']
                    },
                    {
                        label:'Job List',
                        routerLink: ['/job/job-list']
                    }
                ]
            }
        ];
    }
}
