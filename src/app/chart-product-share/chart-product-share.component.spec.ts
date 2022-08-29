import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartProductShareComponent } from './chart-product-share.component';

describe('ChartProductShareComponent', () => {
  let component: ChartProductShareComponent;
  let fixture: ComponentFixture<ChartProductShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartProductShareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartProductShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
