import { createAction, props } from '@ngrx/store';
import { User } from '../interfaces/user.interface';

export const load = createAction('[User] Load');
export const loaded = createAction('[User] Loaded', props<{ users: User[] }>());
export const loadFailed = createAction('[User] Load failed');
export const setLoggedInUser = createAction('[User] set Logged-in User', props<{ id: number }>());
