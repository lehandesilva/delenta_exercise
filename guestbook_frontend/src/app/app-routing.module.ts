import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileComponent } from './profile/profile.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  {
    path: 'post-detail',
    loadChildren: () =>
      import('./post-detail/post-detail.module').then(
        (m) => m.PostDetailModule
      ),
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
