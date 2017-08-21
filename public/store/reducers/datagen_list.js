import { handleActions } from 'redux-actions';
import { dataplans } from './dataplans';
import {
  datagenListSetSort,
  datagenListApplyFilters
} from 'plugins/datagenreact/store/actions';

const defaultState = {
  sortField: 'indexName',
  sortReverse: true,
  dataplans: dataplans(undefined, {})
};

export const datagenList = handleActions({
  [datagenListSetSort](state, action) {
    const { field: sortField } = action.payload;
    const sortReverse = (sortField === state.sortField)
      ? !state.sortReverse
      : false;

    return {
      ...state,
      sortField,
      sortReverse,
      dataplans: dataplans(state.dataplans, action)
    };
  },
  [datagenListApplyFilters](state, action) {
    return {
      ...state,
      dataplans: dataplans(state.dataplans, action)
    };
  }
}, defaultState);
