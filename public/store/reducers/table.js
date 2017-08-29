import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  datagenListSetSort,
  datagenFetchDataplans,
  datagenFetchDataplansSuccess,
  datagenFetchDataplansError,
  datagenListSetPage
} from '../actions/datagen_list';

const defaultState = {
  sortField: 'indexName',
  sortReverse: true,
  loading: false,
  error: null,
  pageSize: 5,
  pageNumber: 0,
  startItem: 0,
  endItem: 4,
  pageStartIndex: 0,
  requestStart: null,
  requestEnd: null
};

export const table = handleActions({
  [datagenListSetSort](state, action) {
    const { field } = action.payload;
    const sortReverse = (field === state.sortField)
      ? !state.sortReverse
      : false;

    return {
      ...state,
      sortField: field,
      sortReverse
    };
  },
  [datagenFetchDataplans](state, action) {
    return {
      ...state,
      loading: true,
      requestStart: Date.now()
    };
  },
  [datagenFetchDataplansSuccess](state, action) {
    return {
      ...state,
      error: null,
      loading: false,
      requestEnd: Date.now()
    };
  },
  [datagenFetchDataplansError](state, action) {
    const { error } = action.payload;
    return {
      ...state,
      error,
      loading: false,
      requestEnd: Date.now()
    };
  },
  [datagenListSetPage](state, action) {
    const { pageNumber } = action.payload;

    return {
      ...state,
      pageNumber
    };
  }
}, defaultState);
