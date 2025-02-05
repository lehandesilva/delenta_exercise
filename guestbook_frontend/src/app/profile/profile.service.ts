import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  changePassword(oldPassword: string, newPassword: string) {
    return this.http.put(
      `${environment.BACKEND_API}/profile/change-password`,
      { oldPassword, newPassword },
      { withCredentials: true }
    );
  }

  changeUserName(newUserName: string) {
    return this.http.put(
      `${environment.BACKEND_API}/profile/change-username`,
      { newUserName },
      { withCredentials: true }
    );
  }

  deleteAcc() {
    return this.http.delete(
      `${environment.BACKEND_API}/profile/delete-account`,
      { withCredentials: true }
    );
  }
}
