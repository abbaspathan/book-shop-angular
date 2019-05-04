import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerService {
    baseUrl = "http://10.246.93.33:8000/";

    constructor(private http: HttpClient) {

    }

    registerNewCustomer(customer: Customer): Observable<Customer> {
        return this.http.post<Customer>(this.baseUrl + "customers", customer);
    }
}