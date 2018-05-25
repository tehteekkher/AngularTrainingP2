import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostPageComponent } from './components/post-page/post-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', redirectTo: '/posts', pathMatch: 'full' },
    { path: 'posts', component: PostPageComponent },
    // should be the last route,
    // because angular follow the defined route sequence
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
