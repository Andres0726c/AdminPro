import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./pages/pages/pages.component'), 
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./pages/dashboard/dashboard.component'),
            },
            {
                path: 'progress',
                loadComponent: () => import('./pages/progress/progress.component'),
            },
            {
                path: 'grafica1',
                loadComponent: () => import('./pages/grafica1/grafica1.component'),
            },
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
    ]
    },
    {
        path: 'register',
        loadComponent: () => import('./auth/register/register.component'),
    },
    {
        path: 'login',
        loadComponent: () => import('./auth/login/login.component'),
    },
    {
        path: '**',
        loadComponent: () => import('./pages/nopagefound/nopagefound.component')
    }

];
