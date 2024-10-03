import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CkeckInComponent } from './ckeck-in.component';

describe('CkeckInComponent', () => {
  let component: CkeckInComponent;
  let fixture: ComponentFixture<CkeckInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CkeckInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CkeckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
