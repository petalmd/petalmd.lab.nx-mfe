import { Injectable, Logger } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@Injectable()
export class SocketService {
 public socket: Server;
}

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() public server: Server;
  private logger: Logger = new Logger('AppGateway');

  constructor(private socketService: SocketService){}

  afterInit(server: Server) {
    this.socketService.socket = server;
    console.log('Yo!');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }
}
