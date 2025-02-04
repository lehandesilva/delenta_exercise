import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ResetPasswordService {
  constructor(private http: HttpClient) {}

  forgotPassword(email: string) {
    return this.http.post(
      `${environment.BACKEND_API}/profile/forgot-password`,
      {
        email,
      }
    );
  }

  resetPassword(token: string, newPassword: string) {
    return this.http.put(`${environment.BACKEND_API}/profile/reset-password`, {
      token,
      newPassword,
    });
  }
}
