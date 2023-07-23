import { UpdateResult } from "typeorm";
import { Workflow } from "../../interfaces/workflow.interface";

export interface WorkflowRepository {
  get(id: number): Promise<Workflow | null>;
  update(workflow: Workflow): Promise<UpdateResult>;
};

export const WorkflowRepository = Symbol('WorkflowRepository');
