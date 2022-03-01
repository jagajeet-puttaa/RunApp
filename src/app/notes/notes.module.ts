import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { AddnotesComponent } from './addnotes/addnotes.component';
import { ListnotesComponent } from './listnotes/listnotes.component';
import { ViewnotesComponent } from './viewnotes/viewnotes.component';
import { NotecardComponent } from './notecard/notecard.component';


@NgModule({
  declarations: [
    AddnotesComponent,ListnotesComponent, ViewnotesComponent, NotecardComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule
  ]
})
export class NotesModule { }
