import { Route } from '@angular/router';
import { NotificationContainerComponent } from './containers/notification/notification.container';

export const featuresAngularNotificationRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: NotificationContainerComponent },
];
