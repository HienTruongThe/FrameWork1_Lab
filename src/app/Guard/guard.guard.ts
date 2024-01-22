import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
  let login = localStorage.getItem('login');
  const router = inject(Router);
  if (login === 'oce oce') {
    router.navigate(['dashboard']);
    return true;
  } else {
    router.navigate(['login']);
    return false;
  };
};
