import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListPageComponent } from './components/customer-list-page/customer-list-page.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDetailPageComponent } from './components/customer-detail-page/customer-detail-page.component';
import { CustomerAddPageComponent } from './components/customer-add-page/customer-add-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerAddReativePageComponent } from './components/customer-add-reative-page/customer-add-reative-page.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CustomerListPageComponent, CustomerDetailPageComponent, CustomerAddPageComponent, CustomerAddReativePageComponent]
})
export class CustomerModule { }
