import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketService } from './services/socket.service';

@NgModule({
  imports: [CommonModule],
  providers: [SocketService],
})
export class FeaturesAngularSocketModule {}
