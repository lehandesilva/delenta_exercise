import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockData } from './posts-mock-data';
import { Post } from 'src/types/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor() {}

  getPosts(): Observable<Post[]> {
    const posts = of(mockData);
    return posts;
  }
}
