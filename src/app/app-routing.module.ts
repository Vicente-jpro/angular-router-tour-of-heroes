import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListModule } from './hero-list/hero-list.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { ShowComponent } from './hero-list/show/show.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
