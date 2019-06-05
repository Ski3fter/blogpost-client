import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {PostFormComponent} from './post-form/post-form.component';
import {PostListComponent} from './post-list/post-list.component';
import {PostService} from './service/post.service';
import {PostRoutingModule} from './post-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    PostFormComponent,
    PostListComponent
  ],
  providers: [
    PostService
  ]
})
export class PostModule { }
