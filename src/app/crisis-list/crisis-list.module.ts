import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisListComponent } from './crisis-list.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';


@NgModule({
  declarations: [
    CrisisListComponent,
    CrisisCenterHomeComponent,
    CrisisDetailComponent
  ],
  imports: [
    CommonModule,
    CrisisCenterRoutingModule,
  ],
  exports: [
    CrisisListComponent,
    CrisisDetailComponent,
    CrisisCenterHomeComponent
  ]
})
export class CrisisListModule { }
