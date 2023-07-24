import { createFeatureSelector } from '@ngrx/store';
import { moduleKey, State } from './schedule.reducer';

export const scheduleModuleState = createFeatureSelector<State>(moduleKey);
