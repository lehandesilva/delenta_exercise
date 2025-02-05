import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PostsComponent, PostComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [PostsComponent],
})
export class PostsModule {}
