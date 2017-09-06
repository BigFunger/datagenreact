import { combineReducers } from 'redux';
import * as datasources from './datasources';
import { uiState } from './ui_state';

export const datagenEdit = combineReducers({
  datasources: datasources.datasources,
  uiState
});

export const getEditDatasource = (state) => {
  return datasources.getEditDatasource(state.datasources, state.uiState.currentDatasourceId);
}

export const getAllDatasources = (state) => {
  return datasources.getAllDatasources(state.datasources);
}