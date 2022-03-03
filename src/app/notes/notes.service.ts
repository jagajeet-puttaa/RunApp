import { HttpClient, HttpResponse  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NotesService {
  
  resourceUrl = "https://api.github.com/users/ranraj/gists?per_page=2&page=5";

  detailsUrl = "https://api.github.com/gists/"

  constructor(private http: HttpClient) { }

  loadGist(): Observable<HttpResponse<Gist[]>>{

    return this.http.get<Gist[]>(this.resourceUrl, {observe : 'response'});

  }

  loadDetails(url : string): Observable<HttpResponse<Details>>{

    return this.http.get<Details>(url, {observe : 'response'});

  }

  loadSample(){

    return this.http.get(this.detailsUrl);

  }

}

export interface IGist{
  id ?: string,
  url ?: string
} 

export interface IDetails{
  id ?: string,
  url ?: string,
  forks_url ?: string;
  commits_url?: string;
  node_id?: string;
  git_pull_url?: string;
  git_push_url?: string;
  html_url?: string;
} 

export class Details implements IDetails{

  constructor(
    public id ?: string,
    public url ?: string,
    public forks_url?: string,
    public commits_url?: string,
    public node_id?: string,
    public git_pull_url?: string,
    public git_push_url?: string,
    public html_url?: string
  ) { }

}

export class Gist implements IGist{

  constructor(id?: string, url?: string) { }
}