import { sortByOrder } from 'lodash';
import { datagenListApplyFilters } from 'plugins/datagenreact/store/actions';
import { handleActions } from 'redux-actions';

const defaultState = [];

const applySortFilter = (state, sortField, sortReverse) => {
  const direction = sortReverse ? 'desc' : 'asc';

  return sortByOrder(state, [sortField], [direction]);
}

const applyPagerFilter = (state, pageStartIndex, pageSize) => {
  return state.slice(pageStartIndex, pageStartIndex + pageSize);
}

export const filteredDataplans = handleActions({
  [datagenListApplyFilters](state, action) {
    const {
      dataplans,
      sortField,
      sortReverse,
      pageStartIndex,
      pageSize
    } = action.payload;

    const sorted = applySortFilter(dataplans, sortField, sortReverse);
    const paged = applyPagerFilter(sorted, pageStartIndex, pageSize);

    return paged;
  }
}, defaultState);
