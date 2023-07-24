import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { State } from './state.entity';
import { StateRepository } from '../../../../ports/outbound/state-repository.interface';

@Injectable()
export class PostgresAdapter implements StateRepository {
  constructor(@InjectRepository(State) private repo: Repository<State>) {}

  create(state: State): Promise<State> {
    return this.repo.save(state);
  }

  get(id: number): Promise<State | null> {
    return this.repo.findOneBy({ id });
  }
}
