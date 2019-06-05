import {Component, OnInit} from '@angular/core';
import {User} from '../../user/model/user';
import {UserService} from '../../user/service/user.service';
import {Post} from '../model/post';
import {PostService} from '../service/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postService.findAll().subscribe(data => {
      this.posts = data;
    });
  }
}
