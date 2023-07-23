import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { moduleKey, reducer } from './reducers/workflow.reducer';
import { WorkflowFacade } from './workflow.facade';
import { HttpClientModule } from '@angular/common/http';
import { WorkflowService } from './services/workflow.service';
import { EffectsModule } from '@ngrx/effects';
import { WorkflowEffects } from './effects/workflow.effects';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(moduleKey, reducer),
    EffectsModule.forFeature([ WorkflowEffects ]),
  ],
  providers: [
    WorkflowService,
    WorkflowFacade,
  ]
})
export class StoreWorkflowModule {}
