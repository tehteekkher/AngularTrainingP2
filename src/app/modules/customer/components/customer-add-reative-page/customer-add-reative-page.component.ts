import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-add-reative-page',
  templateUrl: './customer-add-reative-page.component.html',
  styleUrls: ['./customer-add-reative-page.component.css']
})
export class CustomerAddReativePageComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: this.fb.group({
        line: [''],
        postcode: ['', [Validators.minLength(3), Validators.maxLength(5)]]
      })
    });

    this.myForm.valueChanges.subscribe(x => {
      console.log(x);
    });
  }

  submit(isValid: boolean, val) {
    console.log(isValid, val);
  }

}
