import { Route } from '@angular/router';

export const remoteRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@petal/features/angular/workflow').then((m) => m.FeaturesAngularWorkflowModule),
  },
];
