import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroListRoutingModule } from './hero-list-routing.module';
import { HeroListComponent } from './hero-list.component';
import { RouterModule } from '@angular/router';
import { ShowComponent } from './show/show.component';


@NgModule({
  declarations: [
    HeroListComponent,
    ShowComponent
  ],
  imports: [
    CommonModule,
    HeroListRoutingModule
  ],
  exports:[
    HeroListComponent
  ]
})
export class HeroListModule { }
