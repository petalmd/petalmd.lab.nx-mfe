import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { User as IUser } from '../../../../interfaces/user.interface';

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn() id?: number;
  @Column() email: string = '';
  @Column() firstName: string = '';
  @Column() lastName: string = '';
}
