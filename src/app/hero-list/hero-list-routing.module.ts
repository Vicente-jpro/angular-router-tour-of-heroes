import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListModule } from './hero-list.module';
import { HeroListComponent } from './hero-list.component';
import {ShowComponent } from '../hero-list/show/show.component'
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'heroes', component: HeroListComponent},
  { path: 'heroes/show/:id', component: ShowComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroListRoutingModule { }
