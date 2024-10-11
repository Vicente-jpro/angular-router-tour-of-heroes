import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListModule } from './hero-list.module';
import { HeroListComponent } from './hero-list.component';

const routes: Routes = [
  { path: 'heroes', component: HeroListComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroListRoutingModule { }
