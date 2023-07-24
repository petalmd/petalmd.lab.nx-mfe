import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({ providedIn: 'root' })
export class SocketService {
  private url = 'http://localhost:3800';
  private socket: any;

  constructor() {
    this.socket = io(this.url); 
    this.socket.on("connect", () => {
      console.log('connected');
    });
  }

  public add(message: string, callback: Function) {
    console.log(message);
    this.socket.on(message, (data: any) => {
      console.log(data);
      callback(data);
    });
  }
}
