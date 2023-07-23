import { Schedule } from "../../interfaces/schedule.interface";

export interface ScheduleService {
  create(schedule: Schedule): Promise<Schedule>;
  list(): Promise<Schedule[]>;
  get(id: number): Promise<Schedule | null>;
}
