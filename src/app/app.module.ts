import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleListComponent } from './user/schedule-list/schedule-list.component';
import { FacultativeListComponent } from './user/facultative-list/facultative-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleListComponent,
    FacultativeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
