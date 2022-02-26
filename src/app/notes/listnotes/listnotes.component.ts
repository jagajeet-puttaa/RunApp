import { Component, OnInit, Input } from '@angular/core';
import { INote, Note } from "../note.model";

@Component({
  selector: 'app-listnotes',
  templateUrl: './listnotes.component.html',
  styleUrls: ['./listnotes.component.css']
})
export class ListnotesComponent implements OnInit {

  notes ?: INote[];
  title = "Notes App";

  constructor() {}

  ngOnInit(): void {
    this.notes = this.dummy();
    this.notes?.forEach((note)=>{
      console.log(note.content)
    });

  }

  dummy(){
    return [ new Note(1,"One"), new Note(2,"Two"), new Note(3,"Three"), new Note(4,"Four"), new Note(5,"Five"),];
  }

}
