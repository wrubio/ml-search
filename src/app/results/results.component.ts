import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';

import { CustomNotificationService } from '../services/custom-notification.service';
import { SeoService } from '../services/seo.service';
import { ItemsModel } from '../models/items.model';
import { loadItems } from '../store/actions';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../store';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})
export class ResultsComponent implements OnInit, OnDestroy {

  public itemsSubcriber: Subscription;
  public items: ItemsModel[] = [];
  public categorie: ItemsModel[] = [];
  public isLoading = false;
  public error = null;
  public schema = null;
  public hasItems = true;

  constructor(
    private router: Router,
    private seo: SeoService,
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private notificationService: CustomNotificationService
  ) { }

  ngOnInit(): void {
    registerLocaleData(es);
    this.itemsSubcriber = this.store.select('items').subscribe(({ categories, items, loading, error }) => {
      this.categorie = categories;
      this.items = items;
      this.isLoading = loading;
      this.error = error;
      this.hasItems = !!this.items.length;

      if (categories && categories.length) {
        this.seoJsonLd();
        this.generateTags();
      }

      if (error) {
        this.notificationService.notify({type: 'danger', text: 'Error al traer información de la búsqueda'});
        this.hasItems = false;
      }
    });

    this.route.queryParams.subscribe(({ search }) => {
      const query = encodeURI(search);
      this.store.dispatch( loadItems({ query }) );
    });
  }

  ngOnDestroy(): void {
    this.itemsSubcriber.unsubscribe();
  }

  public onSelecteItem(id): void {
    this.router.navigate([`items/${id}`]).catch();
  }

  public generateTags() {
    this.seo.generateTags({
      title: this.categorie.join() || 'ML-Search result',
      description: `search result ${this.categorie.join() || 'ML-Search result products'}`,
      image: '',
      slug: window.location.search,
      documentTitle: this.categorie.join() || 'ML-Search result',
      documentDescription:  `search result ${this.categorie.join() || 'ML-Search result products'}`,
    });
  }

  public seoJsonLd() {
    this.schema = {
      '@context': 'http://schema.org',
      '@type': `${this.categorie[0] || 'ML-Search result products'}`,
      name: 'ML-Search result products',
      url: window.location.href,
      description: `search result ${this.categorie.join() || 'ML-Search result products'}`,
    };
  }
}
