import { Component, OnDestroy, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';

import { CustomNotificationService } from '../services/custom-notification.service';
import { loadItem } from '../store/actions/item.actions';
import { SeoService } from '../services/seo.service';
import { ItemsModel } from '../models/items.model';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { Subscription } from 'rxjs';
import { loadItems } from '../store/actions';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.sass']
})
export class ItemDetailsComponent implements OnInit, OnDestroy {

  public itemSubcriber: Subscription;
  public categorySubcriber: Subscription;
  public item: any;
  public isLoading = false;
  public error = null;
  public itemId = '';
  public schema = null;
  public categories =  [];
  public categoryLoading = false;

  constructor(
    private store: Store<AppState>,
    private router: ActivatedRoute,
    private seo: SeoService,
    private notificationService: CustomNotificationService
  ) { }

  ngOnInit(): void {
    registerLocaleData(es);
    this.categorySubcriber = this.store.select('items').subscribe(({ categories, loaded, error }) => {
      this.categories = categories;
      this.categoryLoading = loaded;

      if (this.item && this.categories) {
        this.generateTags();
        this.seoJsonLd()
      }

      if (error) {
        this.notificationService.notify({type: 'danger', text: `Error al traer categorías del item`});
      }
    });

    this.router.params.subscribe(( { id } ) => {
      this.itemId = id;
      this.store.dispatch( loadItem( { id }));
    });

    this.itemSubcriber = this.store.select('item').subscribe(({ item, loading, error }) => {
      this.item = item;
      this.isLoading = loading;
      this.error = error;

      if (!this.categoryLoading && this.item && this.item.title) {
        this.store.dispatch( loadItems({ query: this.item.title.replace(/ .*/, '') }));
      }

      if (error) {
        this.notificationService.notify({type: 'danger', text: `Error al traer información del item ${this.itemId}`});
      }
    });
  }

  ngOnDestroy(): void {
    this.itemSubcriber.unsubscribe();
    this.categorySubcriber.unsubscribe();
  }

  public generateTags() {
    this.seo.generateTags({
      title: this.item.title,
      description: this.item.description,
      image: this.item.picture,
      slug: this.itemId,
      documentTitle: this.item.title,
      documentDescription: this.item.description,
    });
  }

  public seoJsonLd() {
    this.schema = {
      '@context': 'http://schema.org',
      '@type': this.categories[0],
      name: this.item.title,
      url: window.location.href,
      description: this.item.description,
    };
  }
}
