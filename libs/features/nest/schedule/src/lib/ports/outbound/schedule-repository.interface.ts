import { UpdateResult } from "typeorm";
import { Schedule } from "../../interfaces/schedule.interface";

export interface ScheduleRepository {
  create(schedule: Schedule): Promise<Schedule>;
  list(): Promise<Schedule[]>;
  get(id: number): Promise<Schedule | null>;
  update(schedule: Schedule): Promise<UpdateResult>;
  getByUser(userId: number): Promise<Schedule[] | null>;
};

export const ScheduleRepository = Symbol('ScheduleRepository');
