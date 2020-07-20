import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SignInService {
    
    constructor(private http: HttpClient) {}
    
    validateUser(email:string, password:string) {
        const url='http://localhost:8383';
        return this.http.get(`${url}`+'/doctor/isdoctorvalid?email='+email+'&password='+password);
    }
}