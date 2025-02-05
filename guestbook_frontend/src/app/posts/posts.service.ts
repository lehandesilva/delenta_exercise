import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private apiUrl = `${environment.BACKEND_API}/post`; // Adjust API URL as needed

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(this.apiUrl, { withCredentials: true });
  }

  createPost(
    title: string,
    content: string,
    author: string | null
  ): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/new-post`,
      { title, content, author },
      { withCredentials: true }
    );
  }
}
