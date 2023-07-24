import { Module } from '@nestjs/common';
import { ChangeRequestController } from './adapters/inbound/change-request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { State } from './adapters/outbound/state-repository/postgres/state.entity';
import { BpmnEngineService } from './core/bpmn-engine.service';
import { StateRepository } from './ports/outbound/state-repository.interface';
import { PostgresAdapter } from './adapters/outbound/state-repository/postgres/postgres.adapter';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [ChangeRequestController],
  imports: [HttpModule, TypeOrmModule.forFeature([State])],
  providers: [BpmnEngineService, { provide: StateRepository, useClass: PostgresAdapter }],
})
export class FeaturesNestChangeRequestModule {}
