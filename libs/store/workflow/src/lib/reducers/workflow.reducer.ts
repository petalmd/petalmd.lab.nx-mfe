import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { WorkflowActions } from '../actions';
import { ProcessStatus } from '../enums/process-status.enum';
import { Workflow } from '../interfaces/workflow.interface';

export interface State extends EntityState<Workflow> {
  status: ProcessStatus;
}

export const moduleKey = 'schedule';

export const adapter: EntityAdapter<Workflow> = createEntityAdapter<Workflow>();

export const initialState: State = {
  ids: [],
  entities: {},
  status: ProcessStatus.normal
};

export const workflowReducer = createReducer(
  initialState,
  on(WorkflowActions.load, (state) => adapter.removeAll({ ...state, status: ProcessStatus.loading })),
  on(WorkflowActions.loaded, (state, { workflow }) => adapter.addOne(workflow, { ...state, status: ProcessStatus.completed })),
  on(WorkflowActions.loadFailed, (state) => ({ ...state, status: ProcessStatus.failed })),
);

export function reducer(state: State | undefined, action: Action) {
  return workflowReducer(state, action);
}
