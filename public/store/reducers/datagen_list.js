import { dataplans } from './dataplans';

const defaultState = {
  sortField: 'indexName',
  sortReverse: true,
  dataplans: dataplans(undefined, {})
};

export const datagenList = (state = defaultState, action) => {
  const { type, field } = action;

  switch(type) {
    case 'DATAGEN_LIST_SET_SORT':
      const sortField = field;
      const sortReverse = (sortField === state.sortField)
        ? !state.sortReverse
        : false;

      return {
        ...state,
        sortField,
        sortReverse
      };
    default:
      return state;
  }
};