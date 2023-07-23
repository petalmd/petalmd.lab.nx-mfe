import { Route } from '@angular/router';
import { WorkflowContainerComponent } from './containers/workflow.container';

export const featuresAngularWorkflowRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: WorkflowContainerComponent }
];
