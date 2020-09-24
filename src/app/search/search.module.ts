import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { SearchComponent } from './search.component';



@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
