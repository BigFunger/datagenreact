import { sortByOrder } from 'lodash';
import { datagenListSetSort, dataplansSetSort } from 'plugins/datagenreact/store/actions';
import { handleActions } from 'redux-actions';

const defaultState = [];


export const dataplans = handleActions({
  // [datagenListSetSort](state, action) {
  //     const {
  //       field,
  //       sortReverse
  //     } = action.payload;
  //     const direction = sortReverse ? 'desc' : 'asc';

  //     return sortByOrder(state, [field], [direction]);
  // },
  [dataplansSetSort](state, action) {
      const {
        sortField,
        sortReverse
      } = action.payload;
      const direction = sortReverse ? 'desc' : 'asc';

      return sortByOrder(state, [sortField], [direction]);
  }
}, defaultState);
