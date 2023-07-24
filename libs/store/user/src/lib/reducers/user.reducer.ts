import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { UserActions } from '../actions';
import { ProcessStatus } from '../enums/process-status.enum';
import { User } from '../interfaces/user.interface';

export interface State extends EntityState<User> {
  status: ProcessStatus;
  loggedIn: number | null;
}

export const moduleKey = 'user';

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = {
  loggedIn: null,
  ids: [],
  entities: {},
  status: ProcessStatus.normal,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.load, (state) => adapter.removeAll({ ...state, status: ProcessStatus.loading })),
  on(UserActions.loaded, (state, { users }) => adapter.addMany(users, { ...state, status: ProcessStatus.completed })),
  on(UserActions.loadFailed, (state) => ({ ...state, status: ProcessStatus.failed })),
  on(UserActions.setLoggedInUser, (state, { id }) => ({ ...state, loggedIn: id })),
);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}
