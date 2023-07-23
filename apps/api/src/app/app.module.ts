import { Module } from '@nestjs/common';

import { AppDataSource } from '../../ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeaturesNestWorkflowModule } from '@petal/features/nest/workflow';

@Module({
  imports: [TypeOrmModule.forRoot(AppDataSource.options), FeaturesNestWorkflowModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
