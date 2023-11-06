import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iposts } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postUrl = `${environment.baseURL}/posts`;
  private _http = inject(HttpClient)

  constructor() { }


  getAllPosts(): Observable<Array<Iposts>> {
    return this._http.get<Array<Iposts>>(this.postUrl)
  }

  getSinglePost(id: string): Observable<Iposts> {
    let SinglePostURL = `${this.postUrl}/${id}`
    return this._http.get<Iposts>(SinglePostURL)
  }

  addpost(newPostObj: Iposts):Observable<Iposts>{
   return this._http.post<Iposts>(this.postUrl, newPostObj)
  }
  updatePost(post:Iposts):Observable<Iposts>{
    let updateUrl = `${this.postUrl}/${post.id}`
    return this._http.patch<Iposts>(updateUrl,post)
  }

  deletePost(postId:string):Observable<any>{
    let deleteUrl = `${this.postUrl}/${postId}`
   return this._http.delete<any>(deleteUrl)
  }
}
