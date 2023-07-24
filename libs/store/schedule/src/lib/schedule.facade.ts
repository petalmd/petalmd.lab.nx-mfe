import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from './reducers/schedule.reducer';
import { user } from './selectors';
import { ScheduleActions } from './actions';
import { Schedule } from './interfaces/schedule.interface';
import { Transaction } from './interfaces/transaction.interface';
import { SocketService } from 'libs/features/angular/socket/src/lib/services/socket.service';

@Injectable()
export class ScheduleFacade {
  private id: number;

  constructor(private store: Store<State>, private socket: SocketService) {}

  public load(id: number): void {
    this.id = +id;
    this.store.dispatch(ScheduleActions.load({ id }));
    this.socket.add('transaction', this.handleTransaction());
  }

  public transfer(transaction: Transaction): void {
    this.store.dispatch(ScheduleActions.transfer({ transaction }));
  }

  public remove(id: number): void {
    this.store.dispatch(ScheduleActions.remove({ id }));
  }

  public list(): Observable<Schedule[]> {
    return this.store.pipe(select(user.list()));
  }

  private handleTransaction() {
    return (transaction: Transaction) => {
      if (transaction.from === this.id) {
        this.remove(transaction.schedule);
      } else if (transaction.to === this.id) {
        this.load(this.id);
      }
    };
  }
}
