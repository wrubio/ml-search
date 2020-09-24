import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SharedModule } from '../shared/shared.module';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';

// Routing
import { ItemDetailsRoutingModule } from './item-details-routing.module';

// Components
import { ItemDetailsComponent } from './item-details.component';

@NgModule({
  declarations: [ItemDetailsComponent],
  imports: [
    CommonModule,
    ItemDetailsRoutingModule,
    SharedModule,
    NgxJsonLdModule,
  ]
})
export class ItemDetailsModule { }
