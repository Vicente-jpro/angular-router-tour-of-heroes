import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroListComponent } from './hero-list.component';
import { RouterModule } from '@angular/router';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { FormsModule } from '@angular/forms';
import { HeroesRoutingModule } from './heroes-routing.module';


@NgModule({
  declarations: [
    HeroListComponent,
    HeroDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HeroesRoutingModule
  ],
  exports:[
    HeroListComponent,
    HeroDetailComponent
  ]
})
export class HeroListModule { }
