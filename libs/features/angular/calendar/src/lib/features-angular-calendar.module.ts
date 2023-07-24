import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { featuresAngularCalendarRoutes } from './lib.routes';
import { FeatureCalendarFacade } from './facades/feature-calendar.facade';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarContainerComponent } from './containers/calendar.container';
import { StoreUserModule } from "@petal/store/user";
import { StoreScheduleModule } from "@petal/store/schedule";
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { TransferModalComponent } from './modals/transfer.modal';

@NgModule({
  imports: [
    CommonModule,
    FullCalendarModule,
    StoreUserModule,
    StoreScheduleModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterModule.forChild(featuresAngularCalendarRoutes),
  ],
  declarations: [CalendarContainerComponent, TransferModalComponent],
  providers: [FeatureCalendarFacade],
})
export class FeaturesAngularCalendarModule {}
