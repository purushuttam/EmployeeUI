import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Components/Layout/header/header.component';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import("../app/Components/Layout/header/header.module").then((z) => z.HeaderModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
