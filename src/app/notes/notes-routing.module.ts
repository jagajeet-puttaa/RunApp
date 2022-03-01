import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnotesComponent } from './addnotes/addnotes.component';
import { ListnotesComponent } from './listnotes/listnotes.component';
import { ViewnotesComponent } from './viewnotes/viewnotes.component';

const routes: Routes = [
  {
    path: '',
    component: ListnotesComponent
  },
  {
    path: 'add',
    component: AddnotesComponent
  },
  {
    path: 'view/:id',
    component: ViewnotesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
