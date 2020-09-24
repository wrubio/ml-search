import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.sass']
})
export class BreadcrumbsComponent implements OnInit {
  public categories = [];
  constructor(
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select( 'items' ).subscribe(({ categories }) => {
      this.categories = categories;
    });
  }

  onCategory(category): void {
    this.router.navigate(['/items'], {
      queryParams: {
        search: category,
      },
    }).catch();
  }
}
