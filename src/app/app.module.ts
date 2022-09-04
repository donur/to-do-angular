import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ToDoComponent } from './to-do/to-do.component';

@NgModule({
  declarations: [
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ToDoComponent]
})
export class AppModule { }
