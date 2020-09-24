import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemDetailsComponent } from './item-details.component';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';
import { StoreModule, Store } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { ItemsService } from '../services/items.service';
import { SeoService } from '../services/seo.service';
import { CustomNotificationService } from '../services/custom-notification.service';
import { EffectsArray } from '../store/effects';
import { itemReducer, itemsReducer } from '../store/reducers';

describe('ItemDetailsComponent', () => {
  let component: ItemDetailsComponent;
  let fixture: ComponentFixture<ItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDetailsComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule, StoreModule.forRoot({ items: itemsReducer, item: itemReducer }) ],
      providers: [ItemsService, SeoService, CustomNotificationService, HttpClientModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have initial state values', () => {
    const categories = component.categories;
    const item = component.item;
    const error = component.error;
    const isLoading = component.isLoading;

    expect(categories).toEqual([]);
    expect(item).toEqual(null);
    expect(error).toEqual(null);
    expect(isLoading).toBeTruthy();
  });
});
