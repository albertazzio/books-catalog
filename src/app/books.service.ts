import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

import { BookModel } from './bookModel';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  http = inject(HttpClient);

  books = signal<BookModel[]>([]);
  selectedBook = signal<BookModel | null>(null);

  public getBooks(): void {
    this.http.get<BookModel[]>('/books.json').subscribe(books => this.books.set(books));
  }

  public addBook(book: BookModel): void {
    this.books.update(prevBooks => [...prevBooks, book]);
  }
}
