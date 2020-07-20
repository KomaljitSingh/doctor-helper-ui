import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorHeaderComponent } from './doctor-header/doctor-header.component';
import { DoctorFooterComponent } from './doctor-footer/doctor-footer.component';
import { DoctorAdminComponent } from './doctor-admin/doctor-admin.component';
import { DoctorLoginModalComponent } from './doctor-login-modal/doctor-login-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DoctorSignupModalComponent } from './doctor-signup-modal/doctor-signup-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpServiceMapper } from './services/doctor-signup-service.ts/service-mapper';
import { HttpClientModule } from '@angular/common/http';
import { SignUpService } from './services/doctor-signup-service.ts/service';
import { SignInService } from './services/doctor-sign-in-service.ts/signin-service';

@NgModule({
  declarations: [
    AppComponent,
    DoctorHeaderComponent,
    DoctorFooterComponent,
    DoctorAdminComponent,
    DoctorLoginModalComponent,
    DoctorSignupModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SignUpServiceMapper, SignUpService, SignInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
