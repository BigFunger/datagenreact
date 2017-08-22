import { createStore, applyMiddleware, compose } from 'redux';
import { datagenApp } from './reducers/datagen_app';
import thunk from 'redux-thunk';

export const store = createStore(
  datagenApp,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

window.store = store;