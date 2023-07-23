import { Injectable } from '@nestjs/common';
import { User } from '../../../../interfaces/user.interface';
import { UsersRepository } from '../../../../ports/outbound/users-repository.interface';

@Injectable()
export class MemoryAdapter implements UsersRepository {
  public users = [];

  create(user: User): Promise<User> {
    this.users.push(user);
    return Promise.resolve(user);
  }

  list(): Promise<User[]> {
    return Promise.resolve(this.users);
  }

  get(id: number): Promise<User> {
    return Promise.resolve(this.users.filter(u => u.id === id)[0]);
  }
}
