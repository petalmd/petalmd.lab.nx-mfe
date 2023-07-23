import { Global, Module } from '@nestjs/common';
import { AppGateway, SocketService } from './gateways/app.gateway';

@Global()
@Module({
  providers: [AppGateway, SocketService],
  exports: [SocketService],
})
export class FeaturesNestSocketModule {}
