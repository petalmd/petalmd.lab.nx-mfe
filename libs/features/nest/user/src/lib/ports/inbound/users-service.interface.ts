import { User } from "../../interfaces/user.interface";

export interface UsersService {
  create(user: User): Promise<User>;
  list(): Promise<User[]>;
  get(id: number): Promise<User>;
}
