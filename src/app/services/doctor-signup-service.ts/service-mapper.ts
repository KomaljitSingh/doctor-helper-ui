import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { doctor } from 'src/app/models/Doctor';

@Injectable()
export class SignUpServiceMapper {

    requestMapper(signUpForm: FormGroup): doctor {

        return {
            doctorId: this.getRandomNumber(),
            doctorName: signUpForm.controls.firstName.value + '' + signUpForm.controls.lastName.value,
            mobileNo: signUpForm.controls.mobile.value,
            email: signUpForm.controls.email.value,
            dob: new Date(),
            department: signUpForm.controls.department.value,
            qualification: signUpForm.controls.qualification.value,
            password: signUpForm.controls.password.value,
            gender: 'MALE',
            address: {
                streetLine: signUpForm.controls.streetLine.value,
                city: signUpForm.controls.city.value,
                state: signUpForm.controls.state.value,
                pincode: signUpForm.controls.pincode.value,
                country: signUpForm.controls.country.value,
            },
            specialist: signUpForm.controls.specialist.value,
            yearOfExperience: signUpForm.controls.yearOfExperience.value
        } as doctor;
    }
    getRandomNumber(): number {
        return Math.floor(Math.random() * (999999 - 100000)) + 100000;
    }
}