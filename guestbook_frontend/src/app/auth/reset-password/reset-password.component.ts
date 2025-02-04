import { Component, OnInit } from '@angular/core';
import { ResetPasswordService } from './reset-password.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
})
export class ResetPasswordComponent implements OnInit {
  token: string = '';
  newPassword: string = '';
  userFeedback: string = '';

  constructor(
    private resetPasswordService: ResetPasswordService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.token = params['token'];
    });
  }
  // get token from params
  resetPassword() {
    this.resetPasswordService
      .resetPassword(this.token, this.newPassword)
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
