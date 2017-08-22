import { handleActions } from 'redux-actions';
import { dataplans } from './dataplans';
import {
  datagenListSetSort,
  datagenListApplyFilters,
  datagenFetchDataplans,
  datagenFetchDataplansSuccess,
  datagenFetchDataplansError
} from 'plugins/datagenreact/store/actions';

const defaultState = {
  sortField: 'indexName',
  sortReverse: true,
  dataplans: dataplans(undefined, {}),
  loading: false,
  error: null
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
      sortReverse
    };
  },
  [datagenListApplyFilters](state, action) {
    return {
      ...state,
      dataplans: dataplans(state.dataplans, action)
    };
  },
  [datagenFetchDataplans](state, action) {
    const { dataplans } = action.payload;
    return {
      ...state,
      loading: true
    };
  },
  [datagenFetchDataplansSuccess](state, action) {
    const { dataplans } = action.payload;
    return {
      ...state,
      dataplans,
      error: null,
      loading: false
    };
  },
  [datagenFetchDataplansError](state, action) {
    const { error } = action.payload;
    return {
      ...state,
      error,
      loading: false
    };
  }
}, defaultState);
