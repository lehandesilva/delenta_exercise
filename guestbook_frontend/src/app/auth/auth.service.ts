import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:5000/auth';
  private user: { name: string; type: string } | null = null;
  private userSubject = new BehaviorSubject<{
    name: string;
    type: string;
  } | null>(this.getStoredUser());

  constructor(private http: HttpClient) {}

  private getStoredUser() {
    return JSON.parse(localStorage.getItem('user') || 'null');
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/register`, { name, email, password });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, password });
  }
  setUser(user: { name: string; type: string }) {
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

  getUserObservable(): Observable<{ name: string; type: string } | null> {
    return this.userSubject.asObservable();
  }

  logout() {
    this.user = null;
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }
}
