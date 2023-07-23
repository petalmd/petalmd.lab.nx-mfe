import { Inject, Injectable } from '@nestjs/common';
import { WorkflowRepository } from '../ports/outbound/workflow-repository.interface';
import { WorkflowService as IWorkflowService } from '../ports/inbound/workflow-service.interface';
import { Workflow } from '../interfaces/workflow.interface';
import { UpdateResult } from 'typeorm';

@Injectable()
export class WorkflowService implements IWorkflowService {
  constructor(@Inject(WorkflowRepository) private repo: WorkflowRepository) {}

  get(id: number): Promise<any> {
    return this.repo.get(id);
  }

  update(workflow: Workflow): Promise<UpdateResult> {
    return this.repo.update(workflow);
  }
}
