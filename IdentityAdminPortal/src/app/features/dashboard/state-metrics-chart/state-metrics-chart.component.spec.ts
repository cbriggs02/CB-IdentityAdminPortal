import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateMetricsChartComponent } from './state-metrics-chart.component';

describe('StateMetricsChartComponent', () => {
  let component: StateMetricsChartComponent;
  let fixture: ComponentFixture<StateMetricsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateMetricsChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateMetricsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
