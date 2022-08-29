import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSalesCustomerComponent } from './chart-sales-customer.component';

describe('ChartSalesCustomerComponent', () => {
  let component: ChartSalesCustomerComponent;
  let fixture: ComponentFixture<ChartSalesCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartSalesCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartSalesCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
