import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/types/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {
  @Input() post: Post = {} as Post;

  constructor() {}

  ngOnInit(): void {}
}
