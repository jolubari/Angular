import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphOneComponent } from './graph-one/graph-one.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';

export const routes: Routes = [
    {
        path: 'dashboard', 
        component: PagesComponent,
        children: [
          { path: '', component: DashboardComponent },
          { path: 'progress', component: ProgressComponent },
          { path: 'graph-one', component: GraphOneComponent },
        ]
    },
]

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild( routes )
    ],
    exports: [ RouterModule ]
})

export class PagesRoutingModule { }