import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { INote, Note } from "../note.model";
import { IGist, NotesService } from '../notes.service';

@Component({
  selector: 'app-listnotes',
  templateUrl: './listnotes.component.html',
  styleUrls: ['./listnotes.component.css']
})
export class ListnotesComponent implements OnInit {

  notes ?: INote[];
  title = "Notes App";

  constructor( protected noteService : NotesService ) {}

  ngOnInit(): void {
    
    this.loadNotes();
  }

  loadNotes(){

    this.noteService.loadGist().subscribe(
      {
        next : (res : HttpResponse<IGist[]>) => {
          this.notes = res.body?.map( gist => new Note(gist.id, gist.url)) ?? [];
        },

        error: () => {
          console.log("error");
        }
      }
    )
  }

  dummy(){
    return [ new Note("1","One"), new Note("2","Two"), new Note("3","Three"), new Note("4","Four"), new Note("5","Five"),];
  }

}
