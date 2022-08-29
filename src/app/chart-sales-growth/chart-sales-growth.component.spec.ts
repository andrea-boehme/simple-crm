import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSalesGrowthComponent } from './chart-sales-growth.component';

describe('ChartSalesGrowthComponent', () => {
  let component: ChartSalesGrowthComponent;
  let fixture: ComponentFixture<ChartSalesGrowthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartSalesGrowthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartSalesGrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
