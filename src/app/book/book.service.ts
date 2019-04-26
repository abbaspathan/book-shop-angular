import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable()
export class BookService {

    baseUrl="http://10.246.93.33:8000/";

    constructor(private http: HttpClient) { }

    findBookBycategory(category:string):Observable<Book[]>{
        return this.http.get<Book[]>(this.baseUrl+"books/"+category);
    }

    findBookById(bookId:number):Observable<Book>{
       return this.http.get<Book>(this.baseUrl+"book/"+bookId);
    }
}