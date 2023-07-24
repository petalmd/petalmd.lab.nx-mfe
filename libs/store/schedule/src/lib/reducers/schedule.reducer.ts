import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { ScheduleActions } from '../actions';
import { ProcessStatus } from '../enums/process-status.enum';
import { Schedule } from '../interfaces/schedule.interface';

export interface State extends EntityState<Schedule> {
  status: ProcessStatus;
}

export const moduleKey = 'schedule';

export const adapter: EntityAdapter<Schedule> = createEntityAdapter<Schedule>();

export const initialState: State = {
  ids: [],
  entities: {},
  status: ProcessStatus.normal
};

export const scheduleReducer = createReducer(
  initialState,
  on(ScheduleActions.load, (state) => adapter.removeAll({ ...state, status: ProcessStatus.loading })),
  on(ScheduleActions.loaded, (state, { schedules }) => adapter.addMany(schedules, { ...state, status: ProcessStatus.completed })),
  on(ScheduleActions.loadFailed, (state) => ({ ...state, status: ProcessStatus.failed })),
  on(ScheduleActions.remove, (state, { id }) => adapter.removeOne(id, { ...state })),
);

export function reducer(state: State | undefined, action: Action) {
  return scheduleReducer(state, action);
}
