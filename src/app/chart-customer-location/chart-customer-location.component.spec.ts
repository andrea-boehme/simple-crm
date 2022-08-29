import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCustomerLocationComponent } from './chart-customer-location.component';

describe('ChartCustomerLocationComponent', () => {
  let component: ChartCustomerLocationComponent;
  let fixture: ComponentFixture<ChartCustomerLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartCustomerLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartCustomerLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
