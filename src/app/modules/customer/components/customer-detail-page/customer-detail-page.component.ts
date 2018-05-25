import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { switchMap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-customer-detail-page',
  templateUrl: './customer-detail-page.component.html',
  styleUrls: ['./customer-detail-page.component.css']
})
export class CustomerDetailPageComponent implements OnInit {

  customer;
  bgColor: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {

    // readiing customer details from cache / snapshot
    // this.getCustomerDetail(this.route.snapshot.params.id);

    // same result but with nested subscribe
    // read param value
    // this.route.params
    //   .subscribe(params => {
    //     this.getCustomerDetail(params.id);
    //   });

    // same result but using rxjs operators
    this.route.params
      .pipe(
        switchMap(params => this.getCustomerDetail2(params.id))
      ).subscribe(x => {
        this.customer = x;
      }, err => alert(err));

    this.route.queryParamMap
      .subscribe(x => {
        if (!x.has('color')) {
          return;
        }

        this.bgColor = x.get('color');
      });
  }

  getErr() {
    return throwError('errorrrrrr');
  }

  getCustomerDetail2(id: string) {
    // then should call an api
    return this.http
      .get(environment.apiBaseUrl + '/users/' + id);
  }

  getCustomerDetail(id: string) {
    // then should call an api
    this.http.get(environment.apiBaseUrl + '/users/' + id)
      .subscribe(x => {
        // then populate in view html
        this.customer = x;
      });
    console.log(id);
  }

  nextCustomer(val) {
    this.router.navigateByUrl('/customers/' + val);
    this.getCustomerDetail(val);
  }

}
