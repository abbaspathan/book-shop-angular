import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: "./book-list.component.html",
    // selector: "book-list"
})
export class BookListComponent implements OnInit {

    constructor(private bookService: BookService, private route: ActivatedRoute) { }
    books: Book[];

    ngOnInit(): void {
        this.route.paramMap.subscribe((map) => {
            let category = map.get("category");

            this.bookService.findBookBycategory(category).subscribe((data) => {
                this.books = data;
            });
        });
    }
}