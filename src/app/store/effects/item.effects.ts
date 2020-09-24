import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as itemActions from '../actions/item.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { ItemsService } from 'src/app/services/items.service';
import { of } from 'rxjs';

@Injectable()
export class ItemEfects {

  constructor(
    private actions$: Actions,
    private itemsService: ItemsService
  ) {}

  loadItem$ = createEffect(
    () => this.actions$.pipe(ofType(itemActions.loadItem),
    mergeMap(( action ) => this.itemsService.getItemById( action.id )
      .pipe(
        map( ({author, item}) => itemActions.loadItemSuccess({ author, item }) ),
        catchError( error => of(itemActions.loadItemError({ payload: error }) ))
    )
  )));
}

