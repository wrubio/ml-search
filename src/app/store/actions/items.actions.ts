import { createAction, props } from '@ngrx/store';
import { ItemsModel } from 'src/app/models/items.model';


export const loadItems = createAction(
  '[Items] Load Items',
  props<{ query: string }>()
);

export const loadItemsSuccess = createAction(
  '[Items] Load Items success',
  props<{ author: ItemsModel, categories: ItemsModel[], items: ItemsModel[] }>()
);

export const loadItemsError = createAction(
  '[Items] Load Items Fail',
  props<{ payload: any }>()
);

