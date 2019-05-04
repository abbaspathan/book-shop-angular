import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import { BookModule } from './book/book.module';
import { CustomerModule } from './customer/customer.module';
import { WelcomeComponent } from './welcome.component';
import { RouterModule } from '@angular/router';
import { appRouter } from './app.routes';
import { ResourceNotFoundComponent } from './notfound.component';

@NgModule({
  declarations:[
    AppComponent,
    WelcomeComponent,
    ResourceNotFoundComponent
  ],
  providers:[

  ],
  bootstrap:[
    AppComponent
  ],
  imports: [
    BrowserModule,
    BookModule,
    CustomerModule,
    RouterModule.forRoot(appRouter)
  ]
})
export class AppModule{

} 