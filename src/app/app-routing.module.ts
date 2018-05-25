import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostPageComponent } from './components/post-page/post-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
    { path: '', redirectTo: '/posts', pathMatch: 'full' },
    { path: 'posts', component: PostPageComponent },
    // lazy loading
    {
        path: 'customers',
        canActivate: [LoginGuard],
        loadChildren: 'src/app/modules/customer/customer.module#CustomerModule'
    },
    // should be the last route,
    // because angular follow the defined route sequence
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
