import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddPageComponent } from './customer-add-page.component';

describe('CustomerAddPageComponent', () => {
  let component: CustomerAddPageComponent;
  let fixture: ComponentFixture<CustomerAddPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAddPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
