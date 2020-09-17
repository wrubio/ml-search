import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  @ViewChild('searchForm', {static: true}) searchForm;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public onSearch(ele): void {
    this.router.navigate(['/items'], { 
      queryParams: {
        search: ele.value,
      },
    }).catch();
  }
}
