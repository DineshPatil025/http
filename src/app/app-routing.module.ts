import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsDashComponent } from './shared/components/posts-dash/posts-dash.component';
import { PostComponent } from './shared/components/post/post.component';
import { PostFormComponent } from './shared/components/post-form/post-form.component';

const routes: Routes = [

  { path: "", component: PostsDashComponent, },
  { path: "posts", component: PostsDashComponent },
  { path: "posts/add-post", component: PostFormComponent },
  { path: "posts/:postId", component: PostComponent },
  { path: "posts/:postId/edit-post", component: PostFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
