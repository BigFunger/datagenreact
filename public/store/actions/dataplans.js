import { createAction } from 'redux-actions';

export const dataplansSetSort = createAction('DATAPLANS_SET_SORT',
  (sortField, sortReverse) => {
    return {
      sortField,
      sortReverse
    }
  }
);