import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iposts } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl = `${environment.baseURL}/posts`;
  private _http = inject(HttpClient)

  constructor() { }


  getAllPosts(): Observable<Array<Iposts>> {
    return this._http.get<Array<Iposts>>(this.baseUrl)
  }

  getSinglePost(id: string): Observable<Iposts> {
    let SinglePostURL = `${this.baseUrl}/${id}`
    return this._http.get<Iposts>(SinglePostURL)
  }

  addpost(newPostObj: Iposts):Observable<Iposts>{
   return this._http.post<Iposts>(this.baseUrl, newPostObj)
  }

}
