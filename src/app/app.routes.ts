import { Routes } from '@angular/router';
import { MainLayout } from './layout/main/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        title: 'Home',
        loadComponent: () => import('./features/home/home').then((m) => m.Home),
      },
      {
        path: 'sobre',
        title: 'Sobre',
        loadComponent: () => import('./features/about/about').then((m) => m.About),
      },
      {
        path: 'produtos',
        title: 'Produtos',
        loadComponent: () => import('./features/products/products').then((m) => m.Products),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
