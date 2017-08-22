import { sortByOrder } from 'lodash';
import { datagenListApplyFilters } from 'plugins/datagenreact/store/actions';
import { handleActions } from 'redux-actions';
import { Pager } from 'ui/pager/pager';

const defaultState = [];

const applySortFilter = (state, sortField, sortReverse) => {
  const direction = sortReverse ? 'desc' : 'asc';

  return sortByOrder(state, [sortField], [direction]);
}

const applyPagerFilter = (state, pageSize, pageNumber) => {
  const pager = new Pager(state.length, pageSize, pageNumber);
  const startIndex = pager.startIndex;

  return state.slice(startIndex, pageSize);
}

export const filteredDataplans = handleActions({
  [datagenListApplyFilters](state, action) {
    console.log('filteredDataplans handling [datagenListApplyFilters]', action);
    const {
      dataplans,
      sortField,
      sortReverse,
      pageNumber,
      pageSize
    } = action.payload;

    const sorted = applySortFilter(dataplans, sortField, sortReverse);
    const paged = applyPagerFilter(sorted, pageSize, pageNumber);

    return paged;
  }
}, defaultState);
