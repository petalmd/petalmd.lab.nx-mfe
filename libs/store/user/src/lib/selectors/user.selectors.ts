import { createSelector } from '@ngrx/store';
import { ProcessStatus } from '../enums/process-status.enum';
import { userModuleState } from '../reducers';
import { adapter } from '../reducers/user.reducer';

const { selectAll } = adapter.getSelectors();

export const isLoading = () => createSelector(
  userModuleState, state => state.status === ProcessStatus.loading
);

export const list = () => createSelector(
  userModuleState, state => selectAll(state)
);

export const getLoggedInUser = () => createSelector(
  userModuleState, (state) => { 
    console.log(state);
    return selectAll(state).filter(u => +u.id === +state.loggedIn!)[0];
  }
);
