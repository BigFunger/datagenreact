import { combineReducers } from 'redux';
import { dataplans } from './dataplans';
import { filteredDataplans } from './filtered_dataplans';
import { table } from './table';

export const datagenList = combineReducers({
  dataplans,
  filteredDataplans,
  table
});