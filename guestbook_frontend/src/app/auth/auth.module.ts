import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './reset-password/forgot-password/forgot-password.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ResetPasswordComponent, ForgotPasswordComponent],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class AuthModule {}
