import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Workflow as IWorkflow } from '../../../../interfaces/workflow.interface';

@Entity()
export class Workflow implements IWorkflow {
  @PrimaryGeneratedColumn() id?: number;
  @Column() notation: string = '';
}
