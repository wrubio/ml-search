import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Cmponents
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  {
    path: 'items',
    loadChildren: () => import('src/app/results/results.module').then(m => m.ResultsModule),
  },
  {
    path: 'items/:id',
    loadChildren: () => import('src/app/item-details/item-details.module').then(m => m.ItemDetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
