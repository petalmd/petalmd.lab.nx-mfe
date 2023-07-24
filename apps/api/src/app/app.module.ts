import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { FeaturesNestWorkflowModule, Workflow } from '@petal/features/nest/workflow';
import { FeaturesNestUserModule, User } from '@petal/features/nest/user';
import { FeaturesNestScheduleModule, Schedule } from '@petal/features/nest/schedule';
import { FeaturesNestChangeRequestModule, State } from '@petal/features/nest/change-request';
import { environment } from '../environments/environment';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...environment.db,
      type: 'postgres',
      synchronize: false,
      logging: false,
      entities: [Workflow, User, Schedule, State],
      migrations: ['apps/api/db/migrations/*.js'],
      subscribers: [],
      migrationsRun: true,
      autoLoadEntities: true,
    }),
    FeaturesNestWorkflowModule,
    FeaturesNestUserModule,
    FeaturesNestScheduleModule,
    FeaturesNestUserModule,
    FeaturesNestChangeRequestModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
