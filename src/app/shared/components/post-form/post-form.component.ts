import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Iposts } from '../../models/posts';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute, Params } from '@angular/router';
import { MatsnackService } from '../../services/matsnack.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  postForm !: FormGroup;
  newPostObj !: Iposts;
  isInEditMode: boolean = false;
  editObjId !: string;
  patchPostObj !: Iposts;
  updatePostObj !: Iposts;



  // private _postsService = Inject(PostsService)

  private _actRoute = inject(ActivatedRoute);
  private _snackbar = inject(MatsnackService);


  constructor(private _postService: PostsService) { }

  ngOnInit(): void {

    this.createPostForm()
    this.patchPost();
  }

  patchPost() {
    this._actRoute.params.subscribe((param: Params) => {
      this.editObjId = param['postId']
      if (this.editObjId) {
        this.isInEditMode = true;

        this._postService.getSinglePost(this.editObjId).subscribe((post: Iposts) => {
          this.patchPostObj = post
          this.postForm.patchValue(this.patchPostObj)
        });
      }
    })
  }

  createPostForm() {

    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      body: new FormControl(null, [Validators.required]),
      userId: new FormControl(null, [Validators.required]),

    })

  }

  onAddPost() {

    if (this.postForm.valid) {
      this.newPostObj = this.postForm.value;
      console.log(this.newPostObj);
      this._postService.addpost(this.newPostObj).subscribe((post: Iposts) => {

        this.postForm.reset()
        this._snackbar.openSnackBar('Post Added Succesfully', 'close')
      })
    } else {
      this._snackbar.openSnackBar('Enter All the details', 'close')

    }



  }


  onPostUpdate() {

    if (this.isInEditMode && this.postForm.valid) {
      this.updatePostObj = this.postForm.value;
      this._postService.updatePost(this.updatePostObj).subscribe((obj: any) => {
        console.log(obj);
        this.postForm.reset()
        this._snackbar.openSnackBar('Post Updated Succesfully', 'close')
      })

    } else {
      this._snackbar.openSnackBar('Enter All the details', 'close')
    }

  }
}
