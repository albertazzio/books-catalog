import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

import { BooksService } from '../books.service';
import { MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-book',
  templateUrl: './book.html',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardFooter,
    MatCardTitle,
  ],
  styleUrl: './book.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Book {
  private booksService = inject(BooksService);

  protected book = signal(this.booksService.selectedBook());
}
