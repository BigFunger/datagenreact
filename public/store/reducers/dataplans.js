import { handleActions } from 'redux-actions';
import { datagenFetchDataplansSuccess } from 'plugins/datagenreact/store/actions/datagen_list';

const defaultState = [];

// THIS SHOULD BE AN OBJECT, NOT AN ARRAY, DUMBASS.
export const dataplans = handleActions({
  [datagenFetchDataplansSuccess](state, action) {
    const { dataplans } = action.payload;

    return [...dataplans];
  }}, defaultState);
