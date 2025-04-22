/**
 * @Author   : Christian Briglio
 * @Created  : 2025
 *
 * TopNavComponent - This component represents the top navigation bar of the application.
 * It is responsible for rendering the top menu, providing navigation links, and potentially
 * including other top-level elements such as a user profile and logout button.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopNavComponent } from './top-nav.component';

describe('TopNavComponent', () => {
  let component: TopNavComponent;
  let fixture: ComponentFixture<TopNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopNavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
