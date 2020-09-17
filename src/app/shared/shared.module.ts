import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SearchModule } from '../search/search.module';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    SearchModule,
  ],
  exports: [
    NavbarComponent,
  ]
})
export class SharedModule { }
