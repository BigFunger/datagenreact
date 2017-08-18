import { sortByOrder } from 'lodash';

const defaultState = [];

export const dataplans = (state = defaultState, action) => {
  const { type } = action;

  switch(type) {
    case 'DATAGEN_LIST_SET_SORT':
      const {
        field,
        sortReverse
      } = action;
      const direction = sortReverse ? 'desc' : 'asc';

      return sortByOrder(state, [field], [direction]);
    default:
      return state;
  }
};
