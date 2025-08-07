import { FormsModule } from '@angular/forms';
import { MatFormField, MatInput } from '@angular/material/input';
import { ChangeDetectionStrategy, Component, model } from '@angular/core';

@Component({
  selector: 'app-filters',
  imports: [
    MatInput,
    FormsModule,
    MatFormField
  ],
  templateUrl: './filters.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Filters {
  public value = model<string>('');
}
