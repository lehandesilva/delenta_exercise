import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostDetailService {
  private apiUrl = `${environment.BACKEND_API}/post`; // Adjust API URL as needed

  constructor(private http: HttpClient) {}

  getPost(id: string) {
    console.log('called');
    return this.http.get(`${this.apiUrl}/post/${id}`, {
      withCredentials: true,
    });
  }
}
