import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-add-book-modal',
  imports: [
    MatInput,
    MatButton,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    ReactiveFormsModule,
  ],
  templateUrl: './add-book-modal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AddBookModal {
  private formBuilder = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<AddBookModal>);

  form = this.formBuilder.group({
    name: ['', Validators.required],
    author: ['', Validators.required],
    pages: [0, Validators.required],
    text: ['', Validators.required],
  });

  protected onSubmit(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
}
