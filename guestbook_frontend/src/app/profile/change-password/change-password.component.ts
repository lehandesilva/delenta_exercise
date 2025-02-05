import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent implements OnInit {
  oldPassword: string = '';
  newPassword: string = '';
  userFeedback: string = '';

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {}

  changePassword() {
    this.profileService
      .changePassword(this.oldPassword, this.newPassword)
      .subscribe({
        next: (res: any) => {
          this.userFeedback = res.message;
          setTimeout(() => this.router.navigate(['/login']), 3000);
        },
        error: (err) => {
          this.userFeedback = err.error.message;
        },
      });
  }
}
