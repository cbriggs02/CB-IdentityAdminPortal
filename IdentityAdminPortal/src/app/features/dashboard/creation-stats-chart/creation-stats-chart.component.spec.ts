import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationStatsChartComponent } from './creation-stats-chart.component';

describe('CreationStatsChartComponent', () => {
  let component: CreationStatsChartComponent;
  let fixture: ComponentFixture<CreationStatsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationStatsChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationStatsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
