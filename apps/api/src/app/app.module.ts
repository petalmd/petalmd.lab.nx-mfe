import { Module } from '@nestjs/common';

import { AppDataSource } from '../../ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeaturesNestWorkflowModule } from '@petal/features/nest/workflow';
import { FeaturesNestUserModule } from '@petal/features/nest/user';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    FeaturesNestWorkflowModule,
    FeaturesNestUserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
