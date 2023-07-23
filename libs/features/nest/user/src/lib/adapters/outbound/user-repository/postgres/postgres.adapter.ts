import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UsersRepository } from '../../../../ports/outbound/users-repository.interface';

@Injectable()
export class PostgresAdapter implements UsersRepository {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

  create(user: any): Promise<User> {
    return this.usersRepository.save(user);
  }

  list(): Promise<User[]> {
    return this.usersRepository.find();
  }

  get(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }
}
