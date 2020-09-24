import { createReducer, on } from '@ngrx/store';
import { ItemsModel } from 'src/app/models/items.model';
import * as actions from '../actions/index';

export interface ItemState {
  author: any;
  item: ItemsModel;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const INITIAL_ITEM_STATE: ItemState = {
  author: {name: '', lastname: ''},
  item: null,
  loaded: false,
  loading: false,
  error: null,
};

const _itemReducer = createReducer(INITIAL_ITEM_STATE,

  on(actions.loadItem, (state,  { id }) => ({
    ...state,
    loading: true,
    id,
  })),

  on(actions.loadItemSuccess, (state, { author, item }) => ({
    ...state,
    loading: false,
    loaded: true,
    item: { ...item },
    author: { ...author }
  })),

  on(actions.loadItemError, (state, { payload }) => ({
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

export function itemReducer(state, action) {
  return _itemReducer(state, action);
}
