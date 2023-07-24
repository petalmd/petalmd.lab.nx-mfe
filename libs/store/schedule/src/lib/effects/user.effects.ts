import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { ScheduleService } from '../services/schedule.service';
import { ScheduleActions } from '../actions';

@Injectable()
export class ScheduleEffects {
  constructor(private actions$: Actions, private service: ScheduleService) {}

  load$ = createEffect(() => this.actions$.pipe(
    ofType(ScheduleActions.load),
    switchMap(({ id }) =>
      this.service.load(id).pipe(
        map((schedules) => ScheduleActions.loaded({ schedules })),
        catchError(() => of(ScheduleActions.loadFailed())),
      ),
    ),
  ));

  transfer$ = createEffect(() => this.actions$.pipe(
    ofType(ScheduleActions.transfer),
    switchMap(({ transaction }) =>
      this.service.transfer(transaction).pipe(
        map(() => ScheduleActions.transfered()),
        catchError(() => of(ScheduleActions.transferFailed())),
      ),
    ),
  ));
}
