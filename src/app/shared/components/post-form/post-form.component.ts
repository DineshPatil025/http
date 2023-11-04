import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Iposts } from '../../models/posts';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  postForm !: FormGroup;
  newPostObj !: Iposts;


  // private _postsService = Inject(PostsService)


  constructor( private _postService : PostsService) { }

  ngOnInit(): void {

    this.createPostForm()
  }

  createPostForm() {

    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      body: new FormControl(null, [Validators.required]),
      userId: new FormControl(null, [Validators.required]),

    })

  }

  onAddPost() {
    this.newPostObj = this.postForm.value;
    console.log(this.newPostObj);
    this._postService.addpost(this.newPostObj).subscribe((post : Iposts) =>{
      console.log(post);
      
    })


  }

}
