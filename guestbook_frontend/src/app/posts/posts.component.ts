import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  postTitle = 'Post Title';
  postContent = 'Post Content';

  constructor() {}

  ngOnInit(): void {}

  handlePostSubmit() {
    console.log('Post submitted');
  }
}
