import { createSelector } from '@ngrx/store';
import { ProcessStatus } from '../enums/process-status.enum';
import { workflowModuleState } from '../reducers';
import { adapter } from '../reducers/workflow.reducer';

const { selectAll } = adapter.getSelectors();

export const isLoading = () => createSelector(workflowModuleState, state => state.status === ProcessStatus.loading);
export const list = () => createSelector(workflowModuleState, state => selectAll(state));
