import { Component, OnInit } from '@angular/core';
import { Customer, Address } from './customer';

@Component({
    templateUrl: "./customer-login.component.html",
    // selector:"customer-login"
})
export class CustomerLoginComponent implements OnInit {

    customer: Customer;

    ngOnInit() {
        this.customer = new Customer();
        this.customer.address = new Address();
    }
}