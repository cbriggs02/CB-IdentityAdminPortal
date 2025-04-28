/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * LoginComponent Unit Test
 *
 * This test suite verifies the basic instantiation of the LoginComponent.
 * It ensures the component initializes correctly without any errors.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  /**
   * Before each test, configure the test module with the LoginComponent
   * and create the component instance.
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Test: should create the LoginComponent successfully.
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
