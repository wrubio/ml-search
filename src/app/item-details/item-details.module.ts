import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { ItemDetailsRoutingModule } from './item-details-routing.module';

// Components
import { ItemDetailsComponent } from './item-details.component';

@NgModule({
  declarations: [ItemDetailsComponent],
  imports: [
    CommonModule,
    ItemDetailsRoutingModule,
  ]
})
export class ItemDetailsModule { }
