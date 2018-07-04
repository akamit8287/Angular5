import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {path:'dashboard', component:DashboardComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing : true})
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }

