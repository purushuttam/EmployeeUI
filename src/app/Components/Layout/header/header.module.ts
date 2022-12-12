import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './header.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:HeaderComponent
  }
];
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    RouterModule.forChild(routes)
  ],
})
export class HeaderModule { }
