import { UpdateResult } from "typeorm";
import { Workflow } from "../../interfaces/workflow.interface";

export interface WorkflowService {
  get(id: number): Promise<Workflow>;
  update(workdlow: Workflow): Promise<UpdateResult>;
}
