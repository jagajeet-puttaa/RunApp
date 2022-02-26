import { Component, OnInit } from '@angular/core';
import { INote, Note } from './note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

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



  // initialize(){

  //   for(let i=0;i<5;i++)
  //   {
  //     this.notes?.push({
  //       id: i,
  //       content : "Hello"
  //     })
  //   }

  //   console.log(this.notes)

  // }

}
