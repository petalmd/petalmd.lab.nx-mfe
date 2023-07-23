import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Schedule } from './adapters/outbound/schedule-repository/postgres/schedule.entity';
import { SchedulesController } from './adapters/inbound/schedule.controller';
import { SchedulesService } from './core/schedules.service';
import { ScheduleRepository } from './ports/outbound/schedule-repository.interface';
import { PostgresAdapter } from './adapters/outbound/schedule-repository/postgres/postgres.adapter';
import { FeaturesNestSocketModule } from "@petal/features/nest/socket";

@Module({
  imports: [TypeOrmModule.forFeature([Schedule]), FeaturesNestSocketModule],
  controllers: [SchedulesController],
  providers: [SchedulesService, { provide: ScheduleRepository, useClass: PostgresAdapter }],
})
export class FeaturesNestScheduleModule {}
