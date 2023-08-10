import { HomepageComponent } from './homepage/homepage.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';
import { WebComponentWrapper, WebComponentWrapperOptions, startsWith } from '@angular-architects/module-federation-tools';

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
    matcher: startsWith('poc-react'),
    component: WebComponentWrapper,
    data: {
      remoteName: 'http_mfe_react',
      remoteEntry: 'http://localhost:4204/remoteEntry.js',
      exposedModule: './web-components',
      elementName: 'http-mfe-react-element',
    } as WebComponentWrapperOptions,
  },
  {
    path: '',
    component: HomepageComponent,
  },
];
