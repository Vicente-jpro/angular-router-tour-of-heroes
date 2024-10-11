import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroListRoutingModule } from './hero-list-routing.module';
import { HeroListComponent } from './hero-list.component';


@NgModule({
  declarations: [
    HeroListComponent
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
