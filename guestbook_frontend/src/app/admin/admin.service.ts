import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(`${environment.BACKEND_API}/admin`, {
      withCredentials: true,
    });
  }

  banUser(id: string): Observable<any> {
    return this.http.put(
      `${environment.BACKEND_API}/admin/ban/${id}`,
      {},
      { withCredentials: true }
    );
  }
  unBanUser(id: string): Observable<any> {
    return this.http.put(
      `${environment.BACKEND_API}/admin/unban/${id}`,
      {},
      { withCredentials: true }
    );
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${environment.BACKEND_API}/admin/delete/${id}`, {
      withCredentials: true,
    });
  }
  deletePost(id: string): Observable<any> {
    return this.http.delete(
      `${environment.BACKEND_API}/admin/delete-post/${id}`,
      { withCredentials: true }
    );
  }
}
