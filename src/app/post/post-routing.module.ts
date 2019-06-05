import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PostFormComponent} from './post-form/post-form.component';
import {PostListComponent} from './post-list/post-list.component';

const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'addpost', component: PostFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }


