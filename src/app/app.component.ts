import { Component, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'doctor-helper';

  constructor(private modalService: NgbModal) {}

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  showModal = false;
  displayDoctorSignUpModal = false;

  openModal() {
    this.showModal = true;
  }

  showDoctorSignUpModal() {
    this.displayDoctorSignUpModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  closeDoctorSignUpModal() {
    this.displayDoctorSignUpModal = false;
    this.openModal();
  }
}
