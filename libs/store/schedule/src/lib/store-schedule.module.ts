import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ScheduleService } from './services/schedule.service';
import { ScheduleFacade } from './schedule.facade';
import { moduleKey, reducer } from './reducers/schedule.reducer';
import { ScheduleEffects } from './effects/user.effects';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(moduleKey, reducer),
    EffectsModule.forFeature([ScheduleEffects]),
  ],
  providers: [ScheduleService, ScheduleFacade]
})
export class StoreScheduleModule {}
