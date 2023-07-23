import { Module } from '@nestjs/common';

import { AppDataSource } from '../../ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeaturesNestWorkflowModule } from '@petal/features/nest/workflow';
import { FeaturesNestUserModule } from '@petal/features/nest/user';
import { FeaturesNestScheduleModule } from '@petal/features/nest/schedule';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    FeaturesNestWorkflowModule,
    FeaturesNestUserModule,
    FeaturesNestScheduleModule,
    FeaturesNestUserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
