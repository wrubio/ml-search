import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { SearchComponent } from './search.component';



@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
