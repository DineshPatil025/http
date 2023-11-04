import { Component, OnInit, inject } from '@angular/core';
import { Iposts } from '../../models/posts';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts-dash',
  templateUrl: './posts-dash.component.html',
  styleUrls: ['./posts-dash.component.scss']
})
export class PostsDashComponent implements OnInit {

  postsArray !: Array<Iposts>;

  private _postsService = inject(PostsService)

  constructor() { }

  ngOnInit(): void {
    this._postsService.getAllPosts()
      .subscribe((resp: Array<Iposts>) => {
        this.postsArray = resp
        console.log(this.postsArray);
      })

    }

}
