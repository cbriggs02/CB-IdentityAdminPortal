/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * This file contains unit tests for the DashboardComponent to ensure its functionality
 * and proper integration within the Angular application. The tests check that the component
 * is created successfully and interacts correctly with Angular's testing environment.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
