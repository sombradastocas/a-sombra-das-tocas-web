import { Routes } from '@angular/router';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';

export const BLOG_ROUTES: Routes = [
    {
        path: '',
        component: BlogListComponent,
        title: 'A sombra das tocas'
    },
    {
        path: ':slug',
        component: BlogDetailComponent
    }
];
