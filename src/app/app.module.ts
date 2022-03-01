import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NotesModule } from './notes/notes.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,NotesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

  