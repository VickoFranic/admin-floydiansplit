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

  title : string = "Posts";
  posts : Array<string>

  constructor(postService: PostService) { 
    this.posts = postService.getPosts();
  }

  ngOnInit() {
  }

}
