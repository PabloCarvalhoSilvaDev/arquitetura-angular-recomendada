import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { Auth } from './auth';

/**
 * Guard de autenticação.
 * Colocado junto do serviço de auth (mesmo conceito), não em uma pasta `guards/`.
 */
export const authGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  const router = inject(Router);

  if (auth.isAuthenticated()) {
    return true;
  }

  return router.createUrlTree(['/']);
};
