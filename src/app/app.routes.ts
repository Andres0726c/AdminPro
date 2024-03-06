import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./pages/pages.component'), 
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./pages/dashboard/dashboard.component'),
                data: { titulo: 'Dashboard' }
            },
            {
                path: 'progress',
                loadComponent: () => import('./pages/progress/progress.component'),
                data: { titulo: 'Progress' }
            },
            {
                path: 'grafica1',
                loadComponent: () => import('./pages/grafica1/grafica1.component'),
                data: { titulo: 'Gráficas' }
            },
            {
                path: 'Ajuste de tema',
                loadComponent: () => import('./pages/account-settings/account-settings.component'),
                data: { titulo: 'Dashboard' }
            },
            {
                path: 'promesas',
                loadComponent: () => import('./pages/promesas/promesas.component'),
                data: { titulo: 'Promesas' }
            },
            {
                path: 'rxjs',
                loadComponent: () => import('./pages/rxjs/rxjs.component'),
                data: { titulo: 'RxJs' }
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
