import { dataplans } from './dataplans';
import { datagenListSetSort } from 'plugins/datagenreact/store/actions';
import { handleActions } from 'redux-actions';

const defaultState = {
  sortField: 'indexName',
  sortReverse: true
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
  }
}, defaultState);
