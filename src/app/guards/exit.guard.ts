import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CustomerListPageComponent } from '../modules/customer/components/customer-list-page/customer-list-page.component';
import { CustomerModule } from '../modules/customer/customer.module';

@Injectable({
  providedIn: 'root'
})
export class ExitGuard implements CanDeactivate<CustomerListPageComponent> {
  canDeactivate(
    component: CustomerListPageComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {

    return confirm('Are you sure?');
  }
}
