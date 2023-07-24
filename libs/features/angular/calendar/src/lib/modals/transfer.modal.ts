import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FeatureCalendarFacade } from '../facades/feature-calendar.facade';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { User } from '@petal/store/user';
import { Transaction } from 'libs/store/schedule/src/lib/interfaces/transaction.interface';

@Component({
  selector: 'petal-transfer',
  templateUrl: './transfer.modal.html',
  styleUrls: ['./transfer.modal.scss'],
})
export class TransferModalComponent {
  public form = this.fb.group({ user: this.fb.control<User|null>(null, Validators.required)});
  public list$ = this.facade.users();
  public loggedIn: User;

  constructor(
    private facade: FeatureCalendarFacade,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TransferModalComponent>,
  ) {
    this.facade.getLoggedInUser().pipe(takeUntilDestroyed()).subscribe(user => this.loggedIn = user);
  }

  public cancel(): void {
    this.dialogRef.close();
  }

  public confirm(): void {
    this.dialogRef.close({ from: this.loggedIn.id, to: this.form.value.user!.id } as Partial<Transaction>);
  }
}
