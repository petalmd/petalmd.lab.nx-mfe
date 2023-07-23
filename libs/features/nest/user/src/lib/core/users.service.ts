import { Inject, Injectable } from '@nestjs/common';
import { User } from '../interfaces/user.interface';
import { UsersRepository } from '../ports/outbound/users-repository.interface';
import { UsersService as IUsersService } from '../ports/inbound/users-service.interface';

@Injectable()
export class UsersService implements IUsersService {
  constructor(@Inject(UsersRepository) private usersRepository: UsersRepository) {}

  create(user: User): Promise<User> {
    return this.usersRepository.create(user);
  }

  list(): Promise<User[]> {
    return this.usersRepository.list();
  }

  get(id: number): Promise<any> {
    return this.usersRepository.get(id);
  }
}
