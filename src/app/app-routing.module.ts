import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListModule } from './hero-list/hero-list.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
 // { path: 'crisis-center', component: CrisisListComponent},
  //{ path: 'heroes', component: HeroListModule},
  { path: '', redirectTo: '/heroes', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
