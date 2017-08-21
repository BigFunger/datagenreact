import { sortByOrder } from 'lodash';
import { dataplansSetSort } from 'plugins/datagenreact/store/actions';
import { handleActions } from 'redux-actions';

const defaultState = [];

export const dataplans = handleActions({
  [dataplansSetSort](state, action) {
    const {
      sortField,
      sortReverse
    } = action.payload;

    const direction = sortReverse ? 'desc' : 'asc';

    return sortByOrder(state, [sortField], [direction]);
  }
}, defaultState);
