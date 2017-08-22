import { handleActions } from 'redux-actions';
import { datagenFetchDataplansSuccess } from 'plugins/datagenreact/store/actions';

const defaultState = [];

export const dataplans = handleActions({
  [datagenFetchDataplansSuccess](state, action) {
    const { dataplans } = action.payload;

    return [...dataplans];
  }}, defaultState);
