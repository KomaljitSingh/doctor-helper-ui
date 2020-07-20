import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignUpService } from '../services/doctor-signup-service.ts/service';

@Component({
  selector: 'app-doctor-signup-modal',
  templateUrl: './doctor-signup-modal.component.html',
  styleUrls: ['./doctor-signup-modal.component.scss']
})
export class DoctorSignupModalComponent implements OnInit {

  @Input() showModal: boolean;
  @Output() close = new EventEmitter();
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private modalService: NgbModal,
    private signUpService: SignUpService) { }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      department: ['', Validators.required],
      qualification: ['', Validators.required],
      specialist: ['', Validators.required],
      dob: ['', Validators.required],
      streetLine: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
      country: ['', Validators.required],
      yearOfExperience: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['male', [Validators.required]],
      confirmPassword: ['', Validators.required]
    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.signUpService.addUser(this.registerForm).pipe()
      .subscribe(
        data => {
          alert('Registration successful');
          this.closeModal();
        },
        error => {
          alert('error');
        });
  }
  
  closeModal() {
    this.showModal = false;
    this.close.emit();
  }
}
