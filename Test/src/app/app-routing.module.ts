import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { DashboardChildComponent } from './dashboard-child/dashboard-child.component';
import { DashboardChild2Component } from './dashboard-child2/dashboard-child2.component';

const routes: Routes = [
  { path: '', redirectTo: 'login',  pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  {path:'dashboard', component:DashboardComponent, 
  children : [
    {path:'child1', component:DashboardChildComponent},
    {path: 'child2', component:DashboardChild2Component}
  ]
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing : true})
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }

