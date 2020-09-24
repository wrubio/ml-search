import { createAction, props } from '@ngrx/store';
import { ItemsModel } from 'src/app/models/items.model';


export const loadItem = createAction(
  '[Item] Load Item',
  props<{ id: string }>()
);

export const loadItemSuccess = createAction(
  '[Item] Load Item success',
  props<{ author: ItemsModel, item: ItemsModel }>()
);

export const loadItemError = createAction(
  '[Item] Load Item Fail',
  props<{ payload: any }>()
);

