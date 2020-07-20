import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SignInService } from '../services/doctor-sign-in-service.ts/signin-service';

@Component({
  selector: 'app-doctor-login-modal',
  templateUrl: './doctor-login-modal.component.html',
  styleUrls: ['./doctor-login-modal.component.scss']
})
export class DoctorLoginModalComponent implements OnInit {

  signInForm: FormGroup;
  @Input() showModal: boolean;
  @Output() showDoctorSignUpModal = new EventEmitter();
  @Output() close = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private signInService: SignInService) { }

  ngOnInit(): void {

    this.signInForm = this.formBuilder.group({
      Username: ['', Validators.required],
      Password: ['', [Validators.required]],
  });
  }

  openDoctorSignUpModal() {
    this.showDoctorSignUpModal.emit();
    this.close.emit();
  }

  closeModal() {
    this.showModal = false;
    this.close.emit();
  }

  onSubmit() {
    const email= this.signInForm.controls.Username.value;
    const password= this.signInForm.controls.Password.value;
    this.signInService.validateUser(email,password).pipe()
    .subscribe(
      data => {
        alert('Registration successful');
        this.closeModal();
      },
      error => {
        alert('error');
      });
  }
}
