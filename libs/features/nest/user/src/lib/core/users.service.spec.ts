import { UsersRepository } from '../ports/outbound/users-repository.interface';
import { UsersService } from './users.service';
import { createMock } from '@golevelup/ts-jest';
import { Test } from '@nestjs/testing';
import { User } from '../interfaces/user.interface';

describe('Uers Service', () => {
  describe('create()', () => {
    it('delegates saving the user to the repository', async () => {
      repository.create.mockImplementation((user) => Promise.resolve(user));
      const result = await service.create(users[0]);
      expect(result).toEqual(users[0]);
      expect(repository.create).toHaveBeenCalledWith(users[0]);
    });
  });

  describe('list()', () => {
    it('delegates listing the users to the repository', async () => {
      repository.list.mockImplementation(() => Promise.resolve(users));
      const result = await service.list();
      expect(result).toEqual(users);
      expect(repository.list).toHaveBeenCalled();
    });
  });

  describe('get()', () => {
    it('delegates getting the user to the repository', async () => {
      repository.get.mockImplementation(() => Promise.resolve(users[0]));
      const result = await service.get(1);
      expect(result).toEqual(users[0]);
      expect(repository.get).toHaveBeenCalledWith(1);
    });
  });

  const users = [{ firstName: 'Jean-Philippe', lastName: 'Rivard'} as User];
  const repository = createMock<UsersRepository>();
  let service: UsersService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [{ provide: UsersRepository, useValue: repository }, UsersService],
    }).compile();
    service = moduleRef.get<UsersService>(UsersService);
  });
});
