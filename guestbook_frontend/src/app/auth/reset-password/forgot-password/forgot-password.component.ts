import { Component, OnInit } from '@angular/core';
import { ResetPasswordService } from '../reset-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent implements OnInit {
  email: string = '';
  userFeedback: string = '';

  constructor(private resetPasswordService: ResetPasswordService) {}

  forgotPassword() {
    this.resetPasswordService.forgotPassword(this.email).subscribe({
      next: (res) => {
        this.userFeedback = `Sent email to ${this.email}`;
      },
      error: (err) => {
        this.userFeedback = err.error.message;
      },
    });
  }
  ngOnInit(): void {}
}
