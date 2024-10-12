import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroListComponent } from './hero-list.component';
import { RouterModule } from '@angular/router';
import { ShowComponent } from './hero/hero-detail.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeroListComponent,
    ShowComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    HeroListComponent,
    ShowComponent
  ]
})
export class HeroListModule { }
