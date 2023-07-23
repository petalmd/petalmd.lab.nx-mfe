import { Test } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from '../../core/users.service';
import { HttpStatus } from '@nestjs/common';
import { createMock } from '@golevelup/ts-jest';
import { User } from '../../interfaces/user.interface';

const mockResponseObject = () => {
  return createMock<any>({
    json: jest.fn().mockReturnThis(),
    status: jest.fn().mockReturnThis(),
  });
};

describe('Users Controller', () => {
  describe('GET /', () => {
    it('returns a list of users retrieved by core', async () => {
      const users = [];
      const response = mockResponseObject();
      service.list.mockImplementation(() => Promise.resolve(users));
      await ctrl.list(response);
      expect(response.status).toHaveBeenCalledWith(HttpStatus.ACCEPTED);
      expect(response.json).toHaveBeenCalledWith(users);
      expect(service.list).toHaveBeenCalled();
    });
  });

  describe('GET /:id', () => {
    it('returns the user retrieved by core', async () => {
      const user = { id: 1, firstName: 'Jean-Philippe', lastName: 'Rivard' } as User;
      const response = mockResponseObject();
      service.get.mockImplementation(() => Promise.resolve(user));
      await ctrl.get('1', response);
      expect(response.status).toHaveBeenCalledWith(HttpStatus.ACCEPTED);
      expect(response.json).toHaveBeenCalledWith(user);
      expect(service.get).toHaveBeenCalledWith(1);
    });
  });

  const service = createMock<UsersService>();
  let ctrl: UsersController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [{ provide: UsersService, useValue: service }],
    }).compile();
    ctrl = moduleRef.get<UsersController>(UsersController);
  });
});
