import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerLoginComponent } from './customer-login.component';
import { CustomerRegistrationComponent } from './customer-registration.component';
import { RouterModule } from '@angular/router';
import { customerRoutes } from './customer.routes';

@NgModule({
    declarations:[
        CustomerLoginComponent,
        CustomerRegistrationComponent
    ],
    imports:[
        BrowserModule,
        RouterModule.forChild(customerRoutes)
    ],
    exports:[
        CustomerLoginComponent,
        CustomerRegistrationComponent,
        RouterModule        
    ]
})
export class CustomerModule{

}