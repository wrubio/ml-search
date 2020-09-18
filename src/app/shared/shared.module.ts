import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SearchModule } from '../search/search.module';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';



@NgModule({
  declarations: [
    NavbarComponent,
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    SearchModule,
  ],
  exports: [
    NavbarComponent,
    BreadcrumbsComponent,
  ]
})
export class SharedModule { }
