import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailComponent } from './post-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: ':id', component: PostDetailComponent }, // Route for post details
];

@NgModule({
  declarations: [PostDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PostDetailModule {}
