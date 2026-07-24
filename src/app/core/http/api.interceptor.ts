import { HttpInterceptorFn } from '@angular/common/http';

/**
 * Interceptor HTTP global.
 * Colocado em `core/http` por ser infraestrutura da aplicação.
 */
export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const cloned = req.clone({
    setHeaders: {
      'X-Requested-With': 'XMLHttpRequest',
    },
  });

  return next(cloned);
};
