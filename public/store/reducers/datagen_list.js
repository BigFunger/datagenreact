import { dataplans } from './dataplans';

const defaultState = {
  sortField: 'indexName',
  sortReverse: true,
  dataplans: dataplans(undefined, {})
};

export const datagenList = (state = defaultState, action) => {
  const { type } = action;

  switch(type) {
    case 'DATAGEN_LIST_SET_SORT':
      debugger;
      const { field: sortField } = action;
      const sortReverse = (sortField === state.sortField)
        ? !state.sortReverse
        : false;

      return {
        ...state,
        sortField,
        sortReverse,
        dataplans: dataplans(state.dataplans, {
          type,
          sortField,
          sortReverse
        })
      };
    default:
      return state;
  }
};