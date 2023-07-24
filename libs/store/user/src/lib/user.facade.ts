import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserActions } from './actions';
import { State } from './reducers/user.reducer';
import { user } from './selectors';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserFacade {
  constructor(private store: Store<State>) {}

  public load(): void {
    this.store.dispatch(UserActions.load());
  }

  public setLoggedInUser(id: number): void {
    this.store.dispatch(UserActions.setLoggedInUser({ id }));
  }

  public isLoading(): Observable<boolean> {
    return this.store.pipe(select(user.isLoading()));
  }

  public list(): Observable<User[]> {
    return this.store.pipe(select(user.list()));
  }

  public getLoggedInUser(): Observable<User> {
    return this.store.pipe(select(user.getLoggedInUser()));
  }
}
