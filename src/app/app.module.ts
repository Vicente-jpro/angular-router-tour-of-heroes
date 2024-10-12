import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroListModule } from './hero-list/hero-list.module';
import { FormsModule } from '@angular/forms';
import { CrisisListModule } from './crisis-list/crisis-list.module';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HeroListModule,
    CrisisListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
