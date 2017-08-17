import { createStore } from 'redux';
import { datagenApp } from './reducers/datagen_app';

export const store = createStore(
  datagenApp
);