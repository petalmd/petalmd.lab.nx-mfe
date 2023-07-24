import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScheduleFacade, Transaction } from '@petal/store/schedule';
import { UserFacade } from '@petal/store/user';
import { ComponentType } from '@angular/cdk/portal';

@Injectable()
export class FeatureCalendarFacade {
  constructor(public user: UserFacade, public schedule: ScheduleFacade, private dialog: MatDialog) {}

  public load(id: number): void {
    this.user.load();
    this.user.setLoggedInUser(id);
    this.schedule.load(id);
  }

  public users() {
    return this.user.list();
  }

  public getLoggedInUser() {
    return this.user.getLoggedInUser();
  }

  public schedules() {
    return this.schedule.list();
  }

  public openDialog(id: number, cmpt: ComponentType<unknown>) {
    const dialogRef = this.dialog.open(cmpt, { minWidth: '400px' });
    dialogRef.afterClosed().subscribe((transaction: Partial<Transaction>) => {
      if (transaction !== undefined) {
        this.schedule.transfer({ ...transaction, schedule: id } as Transaction);
      }
    });
  }
}
