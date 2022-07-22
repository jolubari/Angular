import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GraphOneComponent } from './pages/graph-one/graph-one.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotPageFoundComponent } from './pages/not-page-found/not-page-found.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path: '', 
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graph-one', component: GraphOneComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  },
  
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  
  { path: '**', component: NotPageFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
