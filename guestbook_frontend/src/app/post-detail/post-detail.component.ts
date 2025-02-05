import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostDetailService } from './post-detail.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
})
export class PostDetailComponent implements OnInit {
  title = '';
  content = '';
  author = null;

  constructor(
    private route: ActivatedRoute,
    private postDetailService: PostDetailService
  ) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    if (!postId) {
      return;
    }
    this.postDetailService.getPost(postId).subscribe({
      next: (res: any) => {
        this.author = res.author.name;
        this.title = res.title;
        this.content = res.content;
      },
    });
  }
}
