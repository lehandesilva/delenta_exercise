import { Component, OnInit } from '@angular/core';
import { Post } from 'src/types/post';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postsService.getPosts().subscribe((posts) => (this.posts = posts));
  }

  handlePostSubmit() {
    console.log('Post submitted');
  }
}
