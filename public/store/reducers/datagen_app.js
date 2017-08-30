import { combineReducers } from 'redux';
import { datagenList } from './datagen_list';
import * as fromDatagenList from './datagen_list';
import { datagenEdit } from './datagen_edit';

export const datagenApp = combineReducers({
  datagenList,
  datagenEdit
});

// Selectors
export const getFilteredDataplans = (state) => {
  return fromDatagenList.getFilteredDataplans(state.datagenList);
}