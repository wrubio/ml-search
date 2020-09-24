import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { loadItems } from '../store/actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  @ViewChild('itemSearch', {static: false}) itemSearch: ElementRef;

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('items').subscribe(res => {
      if (res['query']) {
        this.itemSearch.nativeElement.value = decodeURI(res['query']);
      }
    });
  }

  public onSearch(ele): void {
    this.router.navigate(['/items'], {
      queryParams: {
        search: ele.value,
      },
    }).catch();
  }
}
