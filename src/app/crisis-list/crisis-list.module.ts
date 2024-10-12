import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisListComponent } from './crisis-list.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';


@NgModule({
  declarations: [
    CrisisListComponent,
    CrisisCenterHomeComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CrisisListComponent
  ]
})
export class CrisisListModule { }
