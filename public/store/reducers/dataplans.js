import { combineReducers } from 'redux';
import { sortByOrder } from 'lodash';
import { handleActions } from 'redux-actions';
import { Pager } from 'ui/pager/pager';
import { datagenFetchDataplansSuccess } from '../actions/datagen_list';

const byId = handleActions({
  [datagenFetchDataplansSuccess](state, action) {
    const { dataplans } = action.payload;

    return dataplans.reduce((acc, dataplan) => {
      acc[dataplan.id] = dataplan;
      return acc;
    }, {});
  }
}, {});

const allIds =  handleActions({
  [datagenFetchDataplansSuccess](state, action) {
    const { dataplans } = action.payload;
    return dataplans.map(dataplan => dataplan.id);
  }
}, []);

export const dataplans = combineReducers({
  byId,
  allIds
});

// Selectors
const getAllDataplans = (state) => {
  return state.allIds.map(id => state.byId[id]);
}

export const getFilteredDataplans = (state, sortField, sortReverse, pageSize, pageNumber) => {
  const allDataplans = getAllDataplans(state);
  const direction = sortReverse ? 'desc' : 'asc';
  const pager = new Pager(allDataplans.length, pageSize, pageNumber + 1);

  const sorted = sortByOrder(allDataplans, [sortField], [direction]);
  return sorted.slice(pager.startIndex, pager.startIndex + pageSize);
};
