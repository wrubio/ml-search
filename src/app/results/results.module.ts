import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SharedModule } from '../shared/shared.module';

// Routing
import { ResultsRoutingModule } from './results-routing.module';

// Components
import { ResultsComponent } from './results.component';

@NgModule({
  declarations: [ResultsComponent],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    SharedModule,
  ]
})
export class ResultsModule { }
