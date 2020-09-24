import { createReducer, on } from '@ngrx/store';
import { ItemsModel } from 'src/app/models/items.model';
import * as actions from '../actions/index';

export interface ItemsState {
  author: any;
  categories: ItemsModel[];
  items: ItemsModel[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const INITIAL_ITEMS_STATE: ItemsState = {
  author: {name: '', lastname: ''},
  categories: [],
  items: [],
  loaded: false,
  loading: false,
  error: null,
};

const _itemsReducer = createReducer(INITIAL_ITEMS_STATE,

  on(actions.loadItems, (state,  { query }) => ({
    ...state,
    loading: true,
    query,
  })),

  on(actions.loadItemsSuccess, (state, { author, categories, items }) => ({
    ...state,
    loading: false,
    loaded: true,
    items: [ ...items ],
    categories: [ ...categories ],
    author: { ...author }
  })),

  on(actions.loadItemsError, (state, { payload }) => ({
    ...state,
    loaded: false,
    loading: false,
    error: {
      status: payload.status,
      url: payload.url,
      message: payload.message,
      error: payload.error,
    }
  })),
);

export function itemsReducer(state, action) {
  return _itemsReducer(state, action);
}
