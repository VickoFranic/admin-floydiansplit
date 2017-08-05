import { Injectable } from '@angular/core';
import { FacebookService } from 'ngx-facebook';
import { Graph } from './../graph.routes';

@Injectable()
export class PostService {

  posts: Array<any>;

  constructor(private fb: FacebookService) { }

  getPosts() {
    return this.fb.api(Graph.posts)
            .then((response) => {
              return response.data;
            });
  }

}
