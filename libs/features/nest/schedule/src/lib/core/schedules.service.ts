import { Inject, Injectable } from '@nestjs/common';
import { Schedule } from '../interfaces/schedule.interface';
import { ScheduleRepository } from '../ports/outbound/schedule-repository.interface';
import { ScheduleService as IScheduleService } from '../ports/inbound/schedule-service.interface';
import { UpdateResult } from 'typeorm';

@Injectable()
export class SchedulesService implements IScheduleService {
  constructor(@Inject(ScheduleRepository) private repo: ScheduleRepository) {}

  create(schedule: Schedule): Promise<Schedule> {
    return this.repo.create(schedule);
  }

  list(): Promise<Schedule[]> {
    return this.repo.list();
  }

  get(id: number): Promise<Schedule | null> {
    return this.repo.get(id);
  }

  update(task: Schedule): Promise<UpdateResult> {
    return this.repo.update(task);
  }

  getByUser(id: number): Promise<any> {
    return this.repo.getByUser(id);
  }
}
