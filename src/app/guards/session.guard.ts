import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthServiceService, private router: Router) {}

  canActivate(): boolean {
    return this.canLoad();
  }

  canLoad(): boolean {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }

    return this.authService.isLoggedIn();
  }
}
