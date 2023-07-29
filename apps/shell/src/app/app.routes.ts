import { HomepageComponent } from './homepage/homepage.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'notification',
    loadChildren: () => loadRemoteModule('notification', './Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'calendar',
    loadChildren: () => loadRemoteModule('calendar', './Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'workflow',
    loadChildren: () => loadRemoteModule('workflow', './Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: HomepageComponent,
  },
];
