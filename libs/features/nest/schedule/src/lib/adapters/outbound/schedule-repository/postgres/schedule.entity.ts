import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Schedule as ISchedule } from '../../../../interfaces/schedule.interface';

@Entity()
export class Schedule implements ISchedule {
  @PrimaryGeneratedColumn() id?: number;
  @Column() title: string = '';
  @Column() userId: number = 0;
  @Column({ type: 'timestamptz' }) start: string = '';
  @Column({ type: 'timestamptz' }) end: string = '';
}
