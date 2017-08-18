import { combineReducers } from 'redux';
import { datagenList } from './datagen_list';
import { otherState } from './otherState';

export const datagenApp = combineReducers({
  datagenList,
  otherState
});