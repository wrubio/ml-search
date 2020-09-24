import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as itemsActions from '../actions/items.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { ItemsService } from 'src/app/services/items.service';
import { of } from 'rxjs';

@Injectable()
export class ItemsEfects {

  constructor(
    private actions$: Actions,
    private itemsService: ItemsService
  ) {}

  loadItems$ = createEffect(
    () => this.actions$.pipe(ofType(itemsActions.loadItems),
    mergeMap(( action ) => this.itemsService.getItems( action.query )
      .pipe(
        map( ({author, categories, items}) => itemsActions.loadItemsSuccess({ author, categories, items }) ),
        catchError( error => of(itemsActions.loadItemsError({ payload: error }) ))
    )
  )));
}

