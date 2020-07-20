import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { doctor } from 'src/app/models/Doctor';
import { FormGroup } from '@angular/forms';
import { SignUpServiceMapper } from './service-mapper';

@Injectable()
export class SignUpService {
    
    constructor(private http: HttpClient, private signUpMapper: SignUpServiceMapper) {}
    
    addUser(doctorDetail: FormGroup) {
        const url='http://localhost:8383';
        return this.http.post(`${url}/doctor/save`, this.signUpMapper.requestMapper(doctorDetail));
    }
}