import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Schedule } from './schedule.entity';
import { ScheduleRepository } from '../../../../ports/outbound/schedule-repository.interface';

@Injectable()
export class PostgresAdapter implements ScheduleRepository {
  constructor(@InjectRepository(Schedule) private repo: Repository<Schedule>) {}

  create(schedule: any): Promise<Schedule> {
    return this.repo.save(schedule);
  }

  list(): Promise<Schedule[]> {
    return this.repo.find();
  }

  get(id: number): Promise<Schedule | null> {
    return this.repo.findOneBy({ id });
  }

  update(schedule: Schedule): Promise<UpdateResult> {
    return this.repo.update(schedule.id as number, schedule);
  }

  getByUser(userId: number): Promise<Schedule[] | null> {
    return this.repo.findBy({ userId });
  }
}
