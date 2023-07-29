import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { featuresAngularNotificationRoutes } from './lib.routes';
import { NotificationContainerComponent } from './containers/notification/notification.container';
import { COMPONENTS } from './components';

@NgModule({
  declarations: [NotificationContainerComponent, ...COMPONENTS],
  imports: [
    CommonModule,
    TextFieldModule,
    MatFormFieldModule,
    RouterModule.forChild(featuresAngularNotificationRoutes),
  ],
})
export class FeaturesAngularNotificationModule {}
