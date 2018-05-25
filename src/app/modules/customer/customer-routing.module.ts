import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListPageComponent } from './components/customer-list-page/customer-list-page.component';
import { CustomerDetailPageComponent } from './components/customer-detail-page/customer-detail-page.component';
import { ExitGuard } from '../../guards/exit.guard';

const routes: Routes = [
  {
    path: 'list',
    component: CustomerListPageComponent,
    canDeactivate: [ExitGuard]
  },
  { path: ':id', component: CustomerDetailPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule { }

export const routedComponents = [CustomerListPageComponent];
