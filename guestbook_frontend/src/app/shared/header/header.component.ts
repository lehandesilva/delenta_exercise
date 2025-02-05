import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  user: { name: string; type: string } | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getUserObservable().subscribe((user) => {
      this.isLoggedIn = user !== null;
      this.isAdmin = user?.type === 'admin';
    });
  }

  logout() {
    this.authService.logout().subscribe({
      error: (err) => {
        console.log(err);
      },
    });
    window.location.reload();
  }
}
