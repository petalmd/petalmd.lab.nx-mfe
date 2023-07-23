import { Module } from '@nestjs/common';
import { WorkflowService } from './core/schedules.service';
import { WorkflowRepository } from './ports/outbound/workflow-repository.interface';
import { PostgresAdapter } from './adapters/outbound/schedule-repository/postgres/postgres.adapter';
import { WorkflowsController } from './adapters/inbound/workflows.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workflow } from './adapters/outbound/schedule-repository/postgres/workflow.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Workflow])],
  controllers: [WorkflowsController],
  providers: [WorkflowService, { provide: WorkflowRepository, useClass: PostgresAdapter }],
})
export class FeaturesNestWorkflowModule {}
