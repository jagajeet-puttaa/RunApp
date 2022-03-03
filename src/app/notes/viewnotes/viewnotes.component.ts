import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Details, IDetails, NotesService } from '../notes.service';


@Component({
  selector: 'app-viewnotes',
  templateUrl: './viewnotes.component.html',
  styleUrls: ['./viewnotes.component.css']
})

export class ViewnotesComponent implements OnInit {

  gistId ?: string | null = '';
  public details ?: IDetails = new Details();
  detailsUrl : string = '';

  constructor( private route: ActivatedRoute, protected noteService : NotesService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      this.gistId = id;
    })

    this.loadDetailsToState();

  }

  loadDetailsToState(){

    this.detailsUrl = "https://api.github.com/gists/" + this.gistId

    this.noteService.loadDetails(this.detailsUrl).subscribe(
      {
          next : (res : HttpResponse<IDetails>) => {

          if(this.details){

            this.details.id = res.body?.id
            this.details.url = res.body?.url
            this.details.forks_url = res.body?.forks_url
            this.details.commits_url = res.body?.commits_url
            this.details.node_id = res.body?.node_id
            this.details.git_pull_url = res.body?.git_pull_url
            this.details.git_push_url = res.body?.git_push_url
            this.details.html_url = res.body?.html_url
            
          }

        },
  
        error: () => {
          console.log("error");
        }
      })
    }

 
}