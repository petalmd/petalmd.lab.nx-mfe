import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreWorkflowModule, WorkflowFacade } from 'libs/store/workflow/src';
import { DiagramComponent } from '../components/diagram.component';

@Component({
  standalone: true,
  selector: 'petal-workflow',
  template: `<petal-workflow-diagram [notation]="(workflow$ | async)?.notation" (update)="update($event)" *ngIf="!!(workflow$ | async)?.notation"><petal-workflow-diagram>`,
  styles: [],
  imports: [CommonModule, StoreWorkflowModule, DiagramComponent],
})
export class WorkflowContainerComponent {
  public workflow$ = this.facade.get();
  constructor(private facade: WorkflowFacade) {
    this.facade.load(1);
  }

  public update(notation: string) {
    this.facade.update({ id: 1, notation });
  }
}
