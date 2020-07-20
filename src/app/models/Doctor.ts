export interface doctor {

    doctorId: number;
    doctorName: string;
    mobileNo: string;
    email: string;
    dob: Date;
    department: string;
    qualification: string;
    password: string;
    gender: Gender;
    address: Address;
    specialist: string;
    yearOfExperience: string;
};

export interface Address {

    streetLine: string;
    city: string;
    state: string;
    pincode: number;
    country: string;
}

export enum Gender {
    MALE = 'MALE',
    FEMALE = 'MALE'
}