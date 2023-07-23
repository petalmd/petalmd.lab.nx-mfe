import { createAction, props } from '@ngrx/store';
import { Workflow } from '../interfaces/workflow.interface';

export const load = createAction('[Workflow] Load', props<{ id: number }>());
export const loaded = createAction('[Workflow] Loaded', props<{ workflow: Workflow }>());
export const loadFailed = createAction('[Workflow] Load failed');

export const update = createAction('[Workflow] Update', props<{ workflow: Workflow }>());
export const updated = createAction('[Workflow] Updated');
export const updateFailed = createAction('[Workflow] Update failed');
