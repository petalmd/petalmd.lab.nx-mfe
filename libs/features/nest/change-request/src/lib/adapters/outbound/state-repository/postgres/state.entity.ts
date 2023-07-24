import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { State as IState } from '../../../../interfaces/state.interface';

@Entity()
export class State implements IState {
  @PrimaryGeneratedColumn() id?: number;
  @Column() from: number = 0;
  @Column() schedule: number = 0;
  @Column() to: number = 0;
  @Column() state: string = '';
}
