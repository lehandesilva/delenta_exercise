import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangeUsernameComponent } from './change-username/change-username.component';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [
    ChangePasswordComponent,
    ChangeUsernameComponent,
    ProfileComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class ProfileModule {}
