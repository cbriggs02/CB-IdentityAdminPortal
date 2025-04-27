/**
 * @Author   : Christian Briglio
 * @Created  : 2025
 *
 * PageNotFoundComponent - This component represents the 404 error page displayed
 * when a user tries to access a non-existing route in the application.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFoundComponent } from './page-not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
