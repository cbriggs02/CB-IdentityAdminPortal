import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditLogDetailsComponent } from './audit-log-details.component';

describe('AuditLogDetailsComponent', () => {
  let component: AuditLogDetailsComponent;
  let fixture: ComponentFixture<AuditLogDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditLogDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditLogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
