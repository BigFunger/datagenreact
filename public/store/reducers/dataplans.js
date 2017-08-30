import { sortByOrder } from 'lodash';
import { handleActions } from 'redux-actions';
import { Pager } from 'ui/pager/pager';
import { datagenFetchDataplansSuccess } from 'plugins/datagenreact/store/actions/datagen_list';

const defaultState = [];

export const dataplans = handleActions({
  [datagenFetchDataplansSuccess](state, action) {
    const { dataplans } = action.payload;

    return [...dataplans];
  }}, defaultState);

// Selectors
export const getFilteredDataplans = (state, sortField, sortReverse, pageSize, pageNumber) => {
  const direction = sortReverse ? 'desc' : 'asc';
  const pager = new Pager(state.length, pageSize, pageNumber + 1);

  const sorted = sortByOrder(state, [sortField], [direction]);
  return sorted.slice(pager.startIndex, pager.startIndex + pageSize);
};
