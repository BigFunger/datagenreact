import { combineReducers } from 'redux';
import { dataplans } from '../dataplans';
import * as fromDataplans from '../dataplans';
import { uiState } from './ui_state';

export const datagenList = combineReducers({
  dataplans,
  uiState
});

// Selectors
export const getFilteredDataplans = ({ dataplans, uiState }) =>
  fromDataplans.getFilteredDataplans(
    dataplans,
    uiState.sortField,
    uiState.sortReverse,
    uiState.pageSize,
    uiState.pageNumber
  );