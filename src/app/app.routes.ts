import { Routes } from '@angular/router';

import { Book } from './book/book';
import { Books } from './books/books';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full',
  },
  {
    path: 'books',
    component: Books,
  },
  {
    path: 'books/:id',
    component: Book,
  },
];
