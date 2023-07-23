import { Module } from '@nestjs/common';
import { User } from './adapters/outbound/user-repository/postgres/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './adapters/inbound/users.controller';
import { UsersService } from './core/users.service';
import { UsersRepository } from './ports/outbound/users-repository.interface';
import { PostgresAdapter } from './adapters/outbound/user-repository/postgres/postgres.adapter';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, { provide: UsersRepository, useClass: PostgresAdapter }],
  exports: [],
})
export class FeaturesNestUserModule {}
