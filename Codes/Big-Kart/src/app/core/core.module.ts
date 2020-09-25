import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSignUpComponent } from './components/user-sign-up/user-sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    LoginComponent,
    UserSignUpComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    LogInComponent,        
  ],
  exports: [
    BsNavbarComponent
  ]
})
export class CoreModule { }
