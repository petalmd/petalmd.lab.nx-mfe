import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Workflow } from '../interfaces/workflow.interface';

@Injectable()
export class WorkflowService {
  private url = '/api';

  constructor(private http: HttpClient) {}

  public load(id: number): Observable<Workflow> {
    return this.http.get<Workflow>(`${this.url}/workflow/${ id }`);
  }

  public update(workflow: Workflow): Observable<any> {
    return this.http.put(`${this.url}/workflow/${ workflow.id }`, workflow);
  }
}
