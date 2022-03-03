import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { IDetails } from '../notes.service';

@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.css']
})
export class NotecardComponent implements OnInit {

  @Input() public data : IDetails = {
    id : '',
    url : '',
    forks_url : '',
    commits_url : '',
    node_id :'',
    git_pull_url :'',
    git_push_url :'',
    html_url : ''
  };

  @Output() dataChange = new EventEmitter();

  editState = false;
  disableSave = true;

  constructor() { }

  ngOnInit(): void {

    console.log(this.data);

  }

  onClickingEdit(){

    this.editState = true;
    this.disableSave = false;

  }

  onClickingSave(){ 

    this.editState = false;
    this.disableSave = true;

  }

}

