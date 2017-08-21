import { createAction } from 'redux-actions';

export const dataplansSetSort = createAction('DATAPLANS_SET_SORT',
  (sortField, sortDirection) => {
    return {
      sortField,
      sortDirection
    }
  }
);