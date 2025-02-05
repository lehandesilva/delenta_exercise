import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
  users: any[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.adminService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  banUser(id: string) {
    this.adminService.banUser(id).subscribe(() => {
      this.fetchUsers(); // Refresh user list
    });
  }
  unBanUser(id: string) {
    this.adminService.unBanUser(id).subscribe(() => {
      this.fetchUsers(); // Refresh user list
    });
  }

  deleteUser(id: string) {
    this.adminService.deleteUser(id).subscribe(() => {
      this.fetchUsers(); // Refresh user list
    });
  }
}
