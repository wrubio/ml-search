import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { ResultsRoutingModule } from './results-routing.module';

// Components
import { ResultsComponent } from './results.component';

@NgModule({
  declarations: [ResultsComponent],
  imports: [
    CommonModule,
    ResultsRoutingModule,
  ]
})
export class ResultsModule { }
