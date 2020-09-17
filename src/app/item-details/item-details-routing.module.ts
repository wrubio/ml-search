import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ItemDetailsComponent } from './item-details.component';

const routes: Routes = [
  { path: '', component: ItemDetailsComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemDetailsRoutingModule { }
