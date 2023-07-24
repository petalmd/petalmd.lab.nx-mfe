import { createAction, props } from '@ngrx/store';
import { Schedule } from '../interfaces/schedule.interface';
import { Transaction } from '../interfaces/transaction.interface';

export const load = createAction('[Schedule] Load', props<{ id: number }>());
export const loaded = createAction('[Schedule] Loaded', props<{ schedules: Schedule[] }>());
export const loadFailed = createAction('[Schedule] Load failed');

export const transfer = createAction('[Schedule] Transfer Request', props<{ transaction: Transaction }>());
export const transfered = createAction('[Schedule] Transfered');
export const transferFailed = createAction('[Schedule] Transfer failed');

export const remove = createAction('[Schedule] Remove', props<{ id: number }>());
