import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisListComponent } from './crisis-list.component';


@NgModule({
  declarations: [
    CrisisListComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CrisisListComponent
  ]
})
export class CrisisListModule { }
