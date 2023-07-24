import { Body, Controller, Get, HttpStatus, Logger, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { BpmnEngineService } from '../../core/bpmn-engine.service';

@Controller('change-request')
export class ChangeRequestController {
  private readonly logger = new Logger(ChangeRequestController.name);
  constructor(private engine: BpmnEngineService) {}

  @Post('transfer')
  async initiateTransfer(@Body() transaction: any, @Res() res: Response): Promise<Response> {
    return res.status(HttpStatus.ACCEPTED).json({ message: await this.engine.initiateTransfer(transaction) });
  }

  @Get(':id/accept')
  async accept(@Param('id') id: any, @Res() res: Response): Promise<Response> {
    return res.status(HttpStatus.ACCEPTED).json({ message: await this.engine.answer(+id, 'accept') });
  }

  /*

  @Get('transfer')
  async initiateTransfer(@Res() res: Response): Promise<Response> {
    return res.status(HttpStatus.ACCEPTED).json({ message: await this.engine.initiateTransfer(this.withAcceptation()) });
  }

  @Get('accept')
  async accept(@Res() res: Response): Promise<Response> {
    return res.status(HttpStatus.ACCEPTED).json({ message: await this.engine.answer('accept') });
  }

  private simple() {
    return `
    <?xml version="1.0" encoding="UTF-8"?>
    <definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:camunda="http://camunda.org/schema/1.0/bpmn">
      <process id="theProcess" isExecutable="true">
      <startEvent id="start" />
      <serviceTask id="serviceTask" implementation="\${environment.services.changeOwnership}" camunda:resultVariable="serviceResult" />
      <endEvent id="end" />
      <sequenceFlow id="flow1" sourceRef="start" targetRef="serviceTask" />
      <sequenceFlow id="flow2" sourceRef="serviceTask" targetRef="end" />
      </process>
    </definitions>
    `.trim();
  }

  private withAcceptation() {
    return `
    <?xml version="1.0" encoding="UTF-8"?>
    <definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <process id="theProcess" isExecutable="true">
        <startEvent id="start" />
        <serviceTask id="markPending" implementation="\${environment.services.markPending}" camunda:resultVariable="serviceResult" />
        <userTask id="requestAcceptation" />
        <serviceTask id="changeOwnership" implementation="\${environment.services.changeOwnership}" camunda:resultVariable="serviceResult" />
        <endEvent id="end" />
        <sequenceFlow id="flow1" sourceRef="start" targetRef="markPending" />
        <sequenceFlow id="flow2" sourceRef="markPending" targetRef="requestAcceptation" />
        <sequenceFlow id="flow3" sourceRef="requestAcceptation" targetRef="changeOwnership" />
        <sequenceFlow id="flow4" sourceRef="changeOwnership" targetRef="end" />
      </process>
    </definitions>
    `.trim();
  }

  */
}
