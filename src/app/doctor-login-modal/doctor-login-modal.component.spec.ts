import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorLoginModalComponent } from './doctor-login-modal.component';

describe('DoctorLoginModalComponent', () => {
  let component: DoctorLoginModalComponent;
  let fixture: ComponentFixture<DoctorLoginModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorLoginModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorLoginModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
