import { createSelector } from '@ngrx/store';
import { ProcessStatus } from '../enums/process-status.enum';
import { scheduleModuleState } from '../reducers';
import { adapter } from '../reducers/schedule.reducer';

const { selectAll } = adapter.getSelectors();

export const isLoading = () => createSelector(scheduleModuleState, state => state.status === ProcessStatus.loading);
export const list = () => createSelector(scheduleModuleState, state => selectAll(state));
