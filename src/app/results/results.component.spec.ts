import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultsComponent } from './results.component';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { CustomNotificationService } from '../services/custom-notification.service';
import { RouterTestingModule } from '@angular/router/testing';
import { itemReducer, itemsReducer } from '../store/reducers';
import { ItemsService } from '../services/items.service';
import { provideMockStore } from '@ngrx/store/testing';
import { SeoService } from '../services/seo.service';
import { EffectsArray } from '../store/effects';
import { StoreModule } from '@ngrx/store';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule, StoreModule.forRoot({items: itemsReducer, item: itemReducer}) ],
      providers: [ItemsService, SeoService, CustomNotificationService, HttpClientModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have initial state values', () => {
    const categories = component.categorie;
    const items = component.items;
    const error = component.error;
    const isLoading = component.isLoading;

    expect(categories).toEqual([]);
    expect(items).toEqual([]);
    expect(error).toEqual(null);
    expect(isLoading).toBeTruthy();
  });
});
