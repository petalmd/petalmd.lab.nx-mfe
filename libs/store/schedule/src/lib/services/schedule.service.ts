import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Schedule } from '../interfaces/schedule.interface';
import { Transaction } from '../interfaces/transaction.interface';

@Injectable()
export class ScheduleService {
  private url = '/api';

  constructor(private http: HttpClient) {}

  public load(id: number): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(`${this.url}/schedule/user/${ id }`);
  }

  public transfer(transaction: Transaction): Observable<any> {
    return this.http.post<any>(`${this.url}/change-request/transfer/`, transaction);
  }
}
