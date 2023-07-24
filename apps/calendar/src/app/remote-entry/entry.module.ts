import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { remoteRoutes } from './entry.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(remoteRoutes)],
})
export class RemoteEntryModule {}
