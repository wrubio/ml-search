import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers/index';

export interface AppState {
  items: reducers.ItemsState;
  item: reducers.ItemState;
}

export const appReducers: ActionReducerMap<AppState> = {
  items: reducers.itemsReducer,
  item: reducers.itemReducer,
};

