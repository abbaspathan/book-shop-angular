import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BookListComponent } from './book-list.component';
import { BookDetailsComponent } from './book-details.component';
import { RouterModule } from '@angular/router';
import { bookRoutes } from './book.routes';
import { HttpClientModule } from "@angular/common/http";
import { BookService } from './book.service';

@NgModule({
    declarations: [
        BookListComponent,
        BookDetailsComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forChild(bookRoutes),
        HttpClientModule
    ],
    exports: [
        BookListComponent,
        BookDetailsComponent,
        RouterModule
    ],
    providers:[
        BookService
    ]
})
export class BookModule {

}