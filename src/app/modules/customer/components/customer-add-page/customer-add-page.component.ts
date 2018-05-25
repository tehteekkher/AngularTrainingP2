import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-add-page',
  templateUrl: './customer-add-page.component.html',
  styleUrls: ['./customer-add-page.component.css']
})
export class CustomerAddPageComponent implements OnInit {

  // customer = {
  //   name: '',
  //   address: {
  //     line: '',
  //     postcode: ''
  //   }
  // };

  constructor() { }

  ngOnInit() {
  }

  submit(isValid: boolean, formValue: any) {
    console.log(isValid, formValue);
  }

}
