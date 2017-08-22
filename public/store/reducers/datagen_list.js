import { handleActions } from 'redux-actions';
import { dataplans } from './dataplans';
import { filteredDataplans } from './filtered_dataplans';
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
  filteredDataplans: filteredDataplans(undefined, {}),
  loading: false,
  error: null,
  pageSize: 5,
  pageNumber: 1
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
      filteredDataplans: filteredDataplans(state.filteredDataplans, action)
    };
  },
  [datagenFetchDataplans](state, action) {
    return {
      ...state,
      loading: true
    };
  },
  [datagenFetchDataplansSuccess](state, action) {
    return {
      ...state,
      dataplans: dataplans(state.dataplans, action),
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
