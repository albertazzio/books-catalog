import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { BookModel } from '../bookModel';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.html',
  styleUrl: './books-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksList {
  public books = input<BookModel[]>();
  public selectedBook = output<BookModel>();
}
