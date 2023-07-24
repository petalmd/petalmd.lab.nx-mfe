import { createFeatureSelector } from '@ngrx/store';
import { moduleKey, State } from './user.reducer';

export const userModuleState = createFeatureSelector<State>(moduleKey);
