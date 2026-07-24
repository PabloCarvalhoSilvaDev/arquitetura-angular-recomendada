import { Injectable, signal } from '@angular/core';

/**
 * Serviço de autenticação da aplicação.
 * Fica em `core` porque é singleton e usado em várias features.
 */
@Injectable({ providedIn: 'root' })
export class Auth {
  private readonly authenticated = signal(false);

  readonly isAuthenticated = this.authenticated.asReadonly();

  login(): void {
    this.authenticated.set(true);
  }

  logout(): void {
    this.authenticated.set(false);
  }
}
