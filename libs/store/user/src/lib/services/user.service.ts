import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';

@Injectable()
export class UserService {
  private url = '/api';

  constructor(private http: HttpClient) {}

  public load(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/user`);
  }
}
