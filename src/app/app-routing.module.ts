import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [

  {
    path : '',
    component : NotesComponent
  },
  {
    path : 'notes',
    loadChildren: () => import('./notes/notes-routing.module').then(m => m.NotesRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
