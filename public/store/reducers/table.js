import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  datagenListSetSort,
  datagenListApplyFilters,
  datagenFetchDataplans,
  datagenFetchDataplansSuccess,
  datagenFetchDataplansError,
  datagenListSetPage
} from 'plugins/datagenreact/store/actions/datagen_list';
import { Pager } from 'ui/pager/pager';

const defaultState = {
  sortField: 'indexName',
  sortReverse: true,
  loading: false,
  error: null,
  pageSize: 5,
  pageNumber: 1,
  startItem: 1,
  endItem: 5,
  pageStartIndex: 0
};

export const table = handleActions({
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
  [datagenFetchDataplans](state, action) {
    return {
      ...state,
      loading: true
    };
  },
  [datagenFetchDataplansSuccess](state, action) {
    return {
      ...state,
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
  ,[datagenListSetPage](state, action) {
    const {
      pageNumber,
      dataplans
    } = action.payload;
    const { 
      pageSize
    } = state;

    const pager = new Pager(dataplans.length, pageSize, pageNumber);

    return {
      ...state,
      pageNumber,
      pageStartIndex: pager.startIndex,
      startItem: pager.startItem,
      endItem: pager.endItem,
    };
  }
}, defaultState);
