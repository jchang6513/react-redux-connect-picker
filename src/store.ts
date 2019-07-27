import { createStore, Store } from "redux";
import appReducer, { AppReducerState } from './appReducer';

export type StoreState = AppReducerState;

const makeStore = () => (
  createStore<StoreState, any, {}, {}>(
    appReducer,
  )
);

export const store = makeStore();
export type Store = typeof store;

export { makeStore as createStore };
