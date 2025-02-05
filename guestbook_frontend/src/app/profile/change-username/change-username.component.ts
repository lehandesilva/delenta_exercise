import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-username',
  templateUrl: './change-username.component.html',
})
export class ChangeUsernameComponent implements OnInit {
  newUsername: string = '';
  userFeedback: string = '';

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {}

  changeUserName() {
    this.profileService.changeUserName(this.newUsername).subscribe({
      next: (res: any) => {
        this.userFeedback = res.message;
      },
      error: (err) => {
        this.userFeedback = err.error.message;
      },
    });
  }
}
