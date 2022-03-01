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
  details ?: IDetails = new Details();
  detailsUrl : string = '';

  constructor( private route: ActivatedRoute, protected noteService : NotesService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      this.gistId = id;
    })

    this.loadDetailsToState();

    console.log(this.gistId)
  }

  // loadDetailsToState(){
    
  //   this.noteService.loadSample().subscribe( res => console.log())

  // }

  loadDetailsToState(){

    // this.noteService.detailsUrl += this.gistId;

    this.detailsUrl = "https://api.github.com/gists/" + this.gistId

    this.noteService.loadDetails(this.detailsUrl).subscribe(
      {
          next : (res : HttpResponse<IDetails>) => {

          console.log(res.body)

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

          console.log(this.details)

          // this.details = res.body?.map( gist => new Details(
          //   gist.id, 
          //   gist.url,
          //   gist.forks_url,
          //   gist.commits_url,
          //   gist.node_id,
          //   gist.git_pull_url,
          //   gist.git_push_url,
          //   gist.html_url
          // )) ?? [];

          // this.details = new Details(
          //   res.body?.id, 
          //   res.body?.url,
          //   res.body?.forks_url,
          //   res.body?.commits_url,
          //   res.body?.node_id,
          //   res.body?.git_pull_url,
          //   res.body?.git_push_url,
          //   res.body?.html_url
          // ) ;

        },
  
        error: () => {
          console.log("error");
        }
      })
    }

 
}