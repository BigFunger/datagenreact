import { combineReducers } from 'redux';
import { datagenList } from './datagen_list';
import { datagenEdit } from './datagen_edit';
import { otherState } from './otherState';

export const datagenApp = combineReducers({
  datagenList,
  datagenEdit,
  otherState
});