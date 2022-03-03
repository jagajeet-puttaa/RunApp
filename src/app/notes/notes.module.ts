import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { AddnotesComponent } from './addnotes/addnotes.component';
import { ListnotesComponent } from './listnotes/listnotes.component';
import { ViewnotesComponent } from './viewnotes/viewnotes.component';
import { NotecardComponent } from './notecard/notecard.component';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddnotesComponent,ListnotesComponent, ViewnotesComponent, NotecardComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    FormsModule
  ]
})
export class NotesModule { }
