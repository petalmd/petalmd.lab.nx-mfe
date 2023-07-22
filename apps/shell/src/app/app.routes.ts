import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'workflow',
    loadChildren: () =>
      import('workflow/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'calendar',
    loadChildren: () =>
      import('calendar/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
