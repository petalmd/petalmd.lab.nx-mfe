import { Body, Controller, Get, HttpStatus, Logger, Param, Put, Req, Res } from '@nestjs/common';
import { WorkflowService } from '../../core/schedules.service';
import { Response } from 'express';
import { Workflow } from '../../interfaces/workflow.interface';

@Controller('workflow')
export class WorkflowsController {
  private readonly logger = new Logger(WorkflowsController.name);
  constructor(private workflows: WorkflowService) {}

  @Get(':id')
  async get(@Param('id') id: any, @Res() res: Response): Promise<Response> {
    return res.status(HttpStatus.ACCEPTED).json(await this.workflows.get(parseInt(id)));
  }

  @Put(':id')
  async put(@Body() body: Workflow, @Res() res: Response): Promise<Response> {
    return res.status(HttpStatus.ACCEPTED).json(await this.workflows.update(body));
  }
}
