import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Post_Detail } from 'src/types/post';
import { Post_Detail as mockData } from './post-mock';

@Injectable({
  providedIn: 'root',
})
export class PostDetailService {
  constructor() {}

  getPost(id: string): Observable<Post_Detail> {
    const post = mockData.find((post) => post.id === id);
    return of(post as Post_Detail);
  }
}
