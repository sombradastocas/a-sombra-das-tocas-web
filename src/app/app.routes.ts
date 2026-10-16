import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout.component';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: 'blog',
                loadChildren: () => import('./features/blog/blog.routes').then(m => m.BLOG_ROUTES)
            },
            {
                path: 'sobre',
                loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent)
            },

            {
                path: 'loja',
                loadChildren: () => import('./features/shop/shop.routes').then(m => m.SHOP_ROUTES)
            },
            {
                path: 'admin',
                // canMatch: [adminGuard],   // ver nota abaixo
                loadChildren: () => import('./features/admin/admin.routes').then(m => m.ADMIN_ROUTES)
            },
            { path: '', redirectTo: 'blog', pathMatch: 'full' }
        ]
    },
    { path: '**', redirectTo: 'blog' }
];
