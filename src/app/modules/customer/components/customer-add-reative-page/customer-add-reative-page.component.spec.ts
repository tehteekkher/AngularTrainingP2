import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddReativePageComponent } from './customer-add-reative-page.component';

describe('CustomerAddReativePageComponent', () => {
  let component: CustomerAddReativePageComponent;
  let fixture: ComponentFixture<CustomerAddReativePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAddReativePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAddReativePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
