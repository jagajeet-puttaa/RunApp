import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { AddnotesComponent } from './addnotes/addnotes.component';
import { ListnotesComponent } from './listnotes/listnotes.component';


@NgModule({
  declarations: [
    AddnotesComponent,ListnotesComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule
  ]
})
export class NotesModule { }
