import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeeCardComponent } from './attendee-card.component';

describe('AttendeeCardComponent', () => {
  let component: AttendeeCardComponent;
  let fixture: ComponentFixture<AttendeeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendeeCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendeeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
