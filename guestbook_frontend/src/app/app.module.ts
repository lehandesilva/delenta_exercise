import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { PostsModule } from './posts/posts.module';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AdminComponent } from './admin/admin.component';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { PostDetailModule } from './post-detail/post-detail.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorPageComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PostsModule,
    AuthModule,
    ProfileModule,
    PostDetailModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
