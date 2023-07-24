import { Route } from '@angular/router';
import { CalendarContainerComponent } from './containers/calendar.container';

export const featuresAngularCalendarRoutes: Route[] = [
  { path: ':id', pathMatch: 'full', component: CalendarContainerComponent },
];
