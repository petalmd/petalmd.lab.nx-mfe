import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Workflow } from './workflow.entity';
import { WorkflowRepository } from '../../../../ports/outbound/workflow-repository.interface';

@Injectable()
export class PostgresAdapter implements WorkflowRepository {
  constructor(@InjectRepository(Workflow) private repo: Repository<Workflow>) {}

  get(id: number): Promise<Workflow | null> {
    return this.repo.findOneBy({ id });
  }

  update(workflow: Workflow): Promise<UpdateResult> {
    return this.repo.update(workflow.id!, workflow);
  }
}
