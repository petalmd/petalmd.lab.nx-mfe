import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './effects/user.effects';
import { moduleKey, reducer } from './reducers/user.reducer';
import { UserService } from './services/user.service';
import { UserFacade } from './user.facade';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(moduleKey, reducer),
    EffectsModule.forFeature([ UserEffects ]),
  ],
  providers: [UserService, UserFacade],
})
export class StoreUserModule {}
