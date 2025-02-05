import { Component, OnInit } from '@angular/core';
import { Post } from 'src/types/post';
import { PostsService } from './posts.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  title: string = '';
  content: string = '';
  userId: string | null = null;

  constructor(
    private postsService: PostsService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPosts();
    this.userId = this.authService.getUser()?.id || null;
  }

  getPosts(): void {
    this.postsService.getPosts().subscribe({
      next: (res: any) => {
        this.posts = res;
      },
    });
  }

  handlePostSubmit() {
    this.postsService
      .createPost(this.title, this.content, this.userId)
      .subscribe({
        next: () => {
          window.location.reload();
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
