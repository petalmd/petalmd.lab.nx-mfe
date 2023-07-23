import { User } from "../../interfaces/user.interface";

export interface UsersRepository {
  create(user: User): Promise<User>;
  list(): Promise<User[]>;
  get(id: number): Promise<User | null>;
};

export const UsersRepository = Symbol('UsersRepository');
