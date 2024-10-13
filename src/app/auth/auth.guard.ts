import { inject } from '@angular/core';
import { CanActivateFn, NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  
  const authService = inject(AuthService);
  const router = inject(Router);
  console.log('authGuard#canActivate called');
  
  if (authService.isLoggedIn) {
    return true;
  }
  // Create a dummy session id
  const sessionId = 123456789;

  const navigationExtras: NavigationExtras = {
    queryParams: { session_id: sessionId },
    fragment: 'anchor'
  };

  return router.createUrlTree(['/login'], navigationExtras);
};
