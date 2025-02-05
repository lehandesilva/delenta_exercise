import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  userFeedback: string = '';

  constructor(
    private profileService: ProfileService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  deleteAcc() {
    this.profileService.deleteAcc().subscribe({
      next: (res: any) => {
        this.userFeedback = res.message;
        this.authService.logout();
        setTimeout(() => this.router.navigate(['/']), 3000);
      },
      error: (err) => {
        this.userFeedback = err.error.message;
      },
    });
  }
}
