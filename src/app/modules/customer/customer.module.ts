import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListPageComponent } from './components/customer-list-page/customer-list-page.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDetailPageComponent } from './components/customer-detail-page/customer-detail-page.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  declarations: [CustomerListPageComponent, CustomerDetailPageComponent]
})
export class CustomerModule { }
