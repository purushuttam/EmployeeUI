import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';


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
                routerLink:['/employee'],
                items:[
                    {
                        label:'Add Employee',
                        routerLink: ['/employee/add-employee'],
                    },
                    {
                        label:'Update Employee',
                        routerLink: ['/employee/update-employee']
                    }
                ]
            },
            {
                label:'Department',
                routerLink:['/department'],
                items:[
                    {
                        label:'Add New Department',
                        routerLink: ['/department/add-department']
                    },
                    {
                        label:'Update Department',
                        routerLink: ['/department/update-department']
                    }
                ]
            },
            {
                label:'Jobs',
                routerLink: ['/job'],
                items:[
                    {
                        label:'Add Job',
                        routerLink: ['/job/add-job']

                    },
                    {
                        label:'Update Job',
                        routerLink: ['/job/update-job']

                    }
                ]
            }
        ];
    }
}
