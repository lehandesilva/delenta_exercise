import { Component, OnInit } from '@angular/core';
import { Post } from 'src/types/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  postTitle = 'Post Title';
  postContent = 'Post Content';

  posts: Post[] = [
    {
      title: 'Post 1',
      content: 'This is the first post',
      author: 'Author 1',
    },
    {
      title: 'Post 2',
      content: 'This is the second post',
      author: 'Author 2',
    },
    {
      title: 'Post 3',
      content: 'This is the second post',
      author: 'Author 2',
    },
    {
      title: 'Post 4',
      content: 'This is the second post',
      author: 'Author 2',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  handlePostSubmit() {
    console.log('Post submitted');
  }
}
