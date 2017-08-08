import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './admin/posts/posts.component';
import { ImagesComponent } from './admin/images/images.component';

export const appRoutes: Routes = [
    { 
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                children: [
                    { path: 'posts', component: PostsComponent },
                    { path: 'images', component: ImagesComponent }
                ]
            }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '/login' }
];