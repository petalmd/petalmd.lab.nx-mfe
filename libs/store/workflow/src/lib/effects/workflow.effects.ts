import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { WorkflowService } from '../services/workflow.service';
import { WorkflowActions } from '../actions';

@Injectable()
export class WorkflowEffects {
  constructor(private actions$: Actions, private service: WorkflowService) {}

  load$ = createEffect(() => this.actions$.pipe(
    ofType(WorkflowActions.load),
    switchMap(({ id }) =>
      this.service.load(id).pipe(
        map((workflow) => WorkflowActions.loaded({ workflow })),
        catchError(() => of(WorkflowActions.loadFailed())),
      ),
    ),
  ));

  update$ = createEffect(() => this.actions$.pipe(
    ofType(WorkflowActions.update),
    switchMap(({ workflow }) =>
      this.service.update(workflow).pipe(
        map(() => WorkflowActions.updated()),
        catchError(() => of(WorkflowActions.updateFailed())),
      ),
    ),
  ));
}
