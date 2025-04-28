/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * This file contains unit tests for the ForbiddenComponent to ensure its functionality
 * and that it behaves as expected in the Angular application. The tests check the component
 * creation and its proper integration with Angular testing tools.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForbiddenComponent } from './forbidden.component';

describe('ForbiddenComponent', () => {
  let component: ForbiddenComponent;
  let fixture: ComponentFixture<ForbiddenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForbiddenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ForbiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
