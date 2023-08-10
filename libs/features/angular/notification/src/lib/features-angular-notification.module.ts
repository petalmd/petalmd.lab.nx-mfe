import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { featuresAngularNotificationRoutes } from './lib.routes';
import { NotificationContainerComponent } from './containers/notification/notification.container';
import { COMPONENTS } from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NotificationContainerComponent, ...COMPONENTS],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    RouterModule.forChild(featuresAngularNotificationRoutes),
  ],
})
export class FeaturesAngularNotificationModule {}
