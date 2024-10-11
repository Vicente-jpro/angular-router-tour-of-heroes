import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisListRoutingModule } from './crisis-list-routing.module';
import { CrisisListComponent } from './crisis-list.component';


@NgModule({
  declarations: [
    CrisisListComponent
  ],
  imports: [
    CommonModule,
    CrisisListRoutingModule
  ],
  exports: [
    CrisisListComponent
  ]
})
export class CrisisListModule { }
