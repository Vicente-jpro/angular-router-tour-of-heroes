import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';

const routes: Routes = [
    
 { path: 'crisis-center', component: CrisisCenterHomeComponent, children: [
    { path: '', component: CrisisListComponent, children: [
        {  path: ':id',  component: CrisisDetailComponent },
        {  path: '', component: CrisisCenterHomeComponent }
    ]}
 ]}
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule { }