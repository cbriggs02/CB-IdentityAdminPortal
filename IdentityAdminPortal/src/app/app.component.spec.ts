/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * AppComponent Unit Test
 *
 * This test suite verifies the correct initialization and rendering of the AppComponent.
 * It includes tests for component creation, property values, and template rendering.
 */
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  /**
   * Configure the testing module before each test,
   * importing the standalone AppComponent.
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  /**
   * Test: Should create the AppComponent instance successfully.
   */
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  /**
   * Test: Should have a title property with the value 'IdentityAdminPortal'.
   */
  it(`should have the 'IdentityAdminPortal' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('IdentityAdminPortal');
  });

  /**
   * Test: Should render the title in the DOM as an h1 heading.
   */
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Hello, IdentityAdminPortal'
    );
  });
});
