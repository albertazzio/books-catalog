import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';

import { BookModel } from '../bookModel';
import { Filters } from '../filters/filters';
import { BooksService } from '../books.service';
import { BooksList } from '../books-list/books-list';
import { AddBookModal } from '../add-book-modal/add-book-modal';

@Component({
  selector: 'app-books',
  imports: [
    Filters,
    BooksList,
    MatButton,
  ],
  templateUrl: './books.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Books {
  private booksService = inject(BooksService);
  private router = inject(Router);
  private dialog = inject(MatDialog);

  filterValue = signal<string>('');
  filteredBooks = computed<BookModel[]>(() => {
    const filter = this.filterValue().trim().toLowerCase();

    return this.booksService.books().filter(book => book.name.toLowerCase().startsWith(filter)); // todo: could improve filter logic
  });

  protected onSelectedBook(book: BookModel): void {
    this.booksService.selectedBook.set(book);
    void this.router.navigate(['/books', book.id]);
  }

  protected onAdd(): void {
    this.dialog.open(AddBookModal, { disableClose: true })
      .afterClosed()
      .subscribe(book => {
        this.booksService.addBook({ ...book, id: this.booksService.books().length + 1 });
    });
  }
}
