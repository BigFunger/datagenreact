import { combineReducers } from 'redux';
import * as datagenList from './datagen_list';
import * as datagenEdit from './datagen_edit';

export const datagenApp = combineReducers({
  datagenList: datagenList.datagenList,
  datagenEdit: datagenEdit.datagenEdit
});

// Selectors
export const getFilteredDataplans = (state) => {
  return datagenList.getFilteredDataplans(state.datagenList);
}

export const getEditDatasource = (state) => {
  return datagenEdit.getEditDatasource(state.datagenEdit);
}

export const getAllDatasources = (state) => {
  return datagenEdit.getAllDatasources(state.datagenEdit);
}