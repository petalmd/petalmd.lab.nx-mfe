import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { UserActions } from '../actions';
import { UserService } from '../services/user.service';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private service: UserService) {}

  load$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.load),
    switchMap(() =>
      this.service.load().pipe(
        map((users) => UserActions.loaded({ users })),
        catchError(() => of(UserActions.loadFailed())),
      ),
    ),
  ));
}
