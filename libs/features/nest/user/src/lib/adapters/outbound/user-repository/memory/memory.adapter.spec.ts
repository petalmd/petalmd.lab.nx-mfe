import { Test } from '@nestjs/testing';
import { User } from '../../../../interfaces/user.interface';
import { MemoryAdapter } from './memory.adapter';

describe('User Repository - Memory Adapter', () => {
  describe('create()', () => {
    it('creates the user', async () => {
      const result = await adapter.create(users[0]);
      expect(adapter.users).toEqual(users);
      expect(result).toEqual(users[0]);
    });
  });

  describe('list()', () => {
    it('lists the users', async () => {
      adapter.users = users;
      const result = await adapter.list();
      expect(result).toEqual(users);
    });
  });

  describe('get()', () => {
    it('gets the user', async () => {
      adapter.users = users;
      const result = await adapter.get(1);
      expect(result).toEqual(users[0]);
    });
  });

  const users = [{ id: 1, firstName: 'Jean-Philippe', lastName: 'Rivard'} as User];
  let adapter: MemoryAdapter;

  beforeEach(async () => {
    const modRef = await Test.createTestingModule({
      providers: [MemoryAdapter],
    }).compile();
    adapter = modRef.get(MemoryAdapter);
  });
});
