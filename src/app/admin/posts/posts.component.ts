import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [
    PostService
  ]
})
export class PostsComponent implements OnInit {

  posts : Array<string>

  constructor(postService: PostService) { 
    postService.getPosts()
      .then((posts) => this.posts = posts);
  }

  ngOnInit() {
  }

}
