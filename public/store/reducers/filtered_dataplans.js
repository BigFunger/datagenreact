import { sortByOrder } from 'lodash';
import { datagenListApplyFilters } from 'plugins/datagenreact/store/actions/datagen_list';
import { handleActions } from 'redux-actions';
import { Pager } from 'ui/pager/pager';

const defaultState = [];

const applySortFilter = (state, sortField, sortReverse) => {
  const direction = sortReverse ? 'desc' : 'asc';

  return sortByOrder(state, [sortField], [direction]);
}

const applyPagerFilter = (state, dataplans, pageSize, pageNumber) => {
  const pager = new Pager(dataplans.length, pageSize, pageNumber + 1);

  return state.slice(pager.startIndex, pager.startIndex + pageSize);
}

export const filteredDataplans = handleActions({
  [datagenListApplyFilters](state, action) {
    const {
      dataplans,
      sortField,
      sortReverse,
      pageSize,
      pageNumber
    } = action.payload;

    const sorted = applySortFilter(dataplans, sortField, sortReverse);
    const paged = applyPagerFilter(sorted, dataplans, pageSize, pageNumber);

    return paged;
  }
}, defaultState);
