import { combineReducers } from 'redux';
import { datagenList } from './datagen_list';
import { datagenEdit } from './datagen_edit';

export const datagenApp = combineReducers({
  datagenList,
  datagenEdit
});