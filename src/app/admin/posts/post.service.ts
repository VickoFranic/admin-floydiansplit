import { Injectable } from '@angular/core';

@Injectable()
export class PostService {

  posts = [
    "Ovo je post 1",
    "Ovo je post 2",
    "Ovo je post 3"
  ]

  constructor() { }

  getPosts() {
    return this.posts;
  }

}
