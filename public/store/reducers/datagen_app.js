import { combineReducers } from 'redux';
import { datagenList } from './datagen_list';
import { dataplans } from './dataplans';
import { otherState } from './otherState';

export const datagenApp = combineReducers({
  dataplans,
  datagenList,
  otherState
});