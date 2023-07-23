import { Controller, Get, HttpStatus, Logger, Param, Res } from '@nestjs/common';
import { UsersService } from '../../core/users.service';
import { Response } from 'express';

@Controller('user')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);
  constructor(private users: UsersService) {}

  @Get()
  async list(@Res() res: Response): Promise<Response> {
    return res.status(HttpStatus.ACCEPTED).json(await this.users.list());
  }

  @Get(':id')
  async get(@Param('id') id: any, @Res() res: Response): Promise<Response> {
    return res.status(HttpStatus.ACCEPTED).json(await this.users.get(parseInt(id)));
  }
}
