import { createFeatureSelector } from '@ngrx/store';
import { moduleKey, State } from './workflow.reducer';

export const workflowModuleState = createFeatureSelector<State>(moduleKey);
