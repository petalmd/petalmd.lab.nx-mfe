import { Route } from '@angular/router';

export const remoteRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@petal/features/angular/notification').then((m) => m.FeaturesAngularNotificationModule),
  },
];
