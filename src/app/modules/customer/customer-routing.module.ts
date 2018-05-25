import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListPageComponent } from './components/customer-list-page/customer-list-page.component';

const routes: Routes = [
  { path: 'list', component: CustomerListPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule { }

export const routedComponents = [CustomerListPageComponent];
