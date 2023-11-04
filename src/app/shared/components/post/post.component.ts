import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iposts } from '../../models/posts';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postId !: string;
  singlePostObj !: Iposts

  private _actRoute = inject(ActivatedRoute);
  private _postsService = inject(PostsService)

  constructor() { }

  ngOnInit(): void {
    this._actRoute.params.subscribe((param: Params) => {
      this.postId = param['postId']
      // console.log(this.postId);
      this._postsService.getSinglePost(this.postId).subscribe((post: Iposts) => {
        this.singlePostObj = post;
        // console.log(this.singlePostObj);
        
      })

    })
  }

}
