/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * UnauthorizedComponent Test Suite -
 *
 * This file contains unit tests for the UnauthorizedComponent. The tests ensure that
 * the component behaves as expected in terms of its creation and rendering. The primary
 * focus is to verify that the component is correctly instantiated and rendered in
 * the testing environment.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnauthorizedComponent } from './unauthorized.component';

describe('UnauthorizedComponent', () => {
  let component: UnauthorizedComponent;
  let fixture: ComponentFixture<UnauthorizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnauthorizedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UnauthorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
