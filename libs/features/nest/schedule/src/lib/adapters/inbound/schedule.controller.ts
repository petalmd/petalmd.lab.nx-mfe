import { Body, Controller, Get, HttpStatus, Logger, Param, Post, Res } from '@nestjs/common';
import { SchedulesService } from '../../core/schedules.service';
import { Response } from 'express';
import { SocketService } from '@petal/features/nest/socket';

@Controller('schedule')
export class SchedulesController {
  private readonly logger = new Logger(SchedulesController.name);
  constructor(private schedules: SchedulesService, private socket: SocketService) {}

  @Get()
  async list(@Res() res: Response): Promise<Response> {
    return res.status(HttpStatus.ACCEPTED).json(await this.schedules.list());
  }

  @Get(':id')
  async get(@Param('id') id: any, @Res() res: Response): Promise<Response> {
    return res.status(HttpStatus.ACCEPTED).json(await this.schedules.get(parseInt(id)));
  }

  @Post(':id/change-owner')
  async changeOwner(@Body() transaction: any, @Res() res: Response): Promise<Response> {
    const schedule = await this.schedules.get(transaction.schedule);
    schedule!.userId = transaction.to;
    this.socket.socket.emit('transaction', transaction);
    return res.status(HttpStatus.ACCEPTED).json(await this.schedules.update(schedule!));
  }

  @Get('/user/:id')
  async getByUser(@Param('id') id: any, @Res() res: Response): Promise<Response> {
    return res.status(HttpStatus.ACCEPTED).json(await this.schedules.getByUser(parseInt(id)));
  }
}
