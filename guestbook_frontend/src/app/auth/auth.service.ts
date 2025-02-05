import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = `${environment.BACKEND_API}/auth`;
  private user: { id: string; name: string; type: string } | null = null;
  private userSubject = new BehaviorSubject<{
    id: string;
    name: string;
    type: string;
  } | null>(this.getStoredUser());

  constructor(private http: HttpClient) {}

  private getStoredUser() {
    return JSON.parse(localStorage.getItem('user') || 'null');
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.put(
      `${this.baseUrl}/register`,
      { name, email, password },
      { withCredentials: true }
    );
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/login`,
      { email, password },
      { withCredentials: true }
    );
  }
  setUser(user: { id: string; name: string; type: string }) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
    this.userSubject.next(user);
  }
  getUser() {
    if (!this.user) {
      this.user = JSON.parse(localStorage.getItem('user') || 'null');
    }
    return this.user;
  }

  getUserObservable(): Observable<{
    id: string;
    name: string;
    type: string;
  } | null> {
    return this.userSubject.asObservable();
  }

  logout() {
    this.user = null;
    localStorage.removeItem('user');
    this.userSubject.next(null);
    return this.http.post(
      `${this.baseUrl}/logout`,
      {},
      { withCredentials: true }
    );
  }
}
