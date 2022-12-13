import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../main.component';
import { AddJobsComponent } from './add-jobs/add-jobs.component';
import { JobListComponent } from './job-list/job-list.component';
import { UpdateJobComponent } from './update-job/update-job.component';

const routes: Routes = [
    {
        path: 'add-job',
        component: AddJobsComponent
    },
    {
        path: 'update-job',
        component: UpdateJobComponent
    },
    {
        path: 'job-list',
        component: JobListComponent
    }
  ];


  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    providers: []
  })

  export class JobRoutingModule { }
