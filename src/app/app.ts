import { RouterOutlet } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';

import { BooksService } from './books.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private booksService = inject(BooksService);

  public ngOnInit(): void {
    this.booksService.getBooks();
  }
}
