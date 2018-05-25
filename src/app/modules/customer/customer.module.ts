import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListPageComponent } from './components/customer-list-page/customer-list-page.component';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  declarations: [CustomerListPageComponent]
})
export class CustomerModule { }
