import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { State } from './reducers/workflow.reducer';
import { user } from './selectors';
import { WorkflowActions } from './actions';
import { Workflow } from './interfaces/workflow.interface';

@Injectable()
export class WorkflowFacade {
  constructor(private store: Store<State>) {}

  public load(id: number): void {
    this.store.dispatch(WorkflowActions.load({ id }));
  }

  public update(workflow: Workflow): void {
    this.store.dispatch(WorkflowActions.update({ workflow }));
  }

  public get(): Observable<Workflow> {
    return this.store.pipe(select(user.list()), map(list => list[0]));
  }
}
