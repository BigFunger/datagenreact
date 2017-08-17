import { combineReducers } from 'redux';
import { dataplans } from './dataplans';
import { otherState } from './otherState';

export const datagenApp = combineReducers({
  dataplans,
  otherState
});