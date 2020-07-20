import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSignupModalComponent } from './doctor-signup-modal.component';

describe('DoctorSignupModalComponent', () => {
  let component: DoctorSignupModalComponent;
  let fixture: ComponentFixture<DoctorSignupModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorSignupModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorSignupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
