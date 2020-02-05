import { NotifyService } from './../notify.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurd implements CanActivate{

  constructor(private authService: AuthService, private notfiy: NotifyService) { }

  canActivate(): boolean {
    if(!this.authService.isAuthenticated.value) {
      this.notfiy.notification('User Doesnt Exist')
      return false;
    } else {
      return true
    }
  }
}
