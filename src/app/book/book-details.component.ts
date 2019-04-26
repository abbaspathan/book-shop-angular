import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: "./book-details.component.html",
})
export class BookDetailsComponent implements OnInit {
    
    constructor(private bookService: BookService, private route: ActivatedRoute) { }
    book:Book;
    ngOnInit(): void {
        this.route.paramMap.subscribe((map) => {
            let bookid = Number(map.get("bookId"));

            this.bookService.findBookById(bookid).subscribe((data) => {
                this.book=data;
            });
        });
    }
}