import { createAction } from 'redux-actions';
import { createThunk } from 'redux-thunks';

export const datagenListApplyFilters = createAction('DATAGEN_LIST_APPLY_FILTERS',
  (sortField, sortReverse) => {
    return {
      sortField,
      sortReverse
    }
  }
);

export const datagenListSetSort = createThunk('DATAGEN_LIST_SET_SORT',
  ({ dispatch, getState, type }, field) => {
    const action = createAction(type);
    dispatch(action({ field }));

    const { sortField, sortReverse } = getState().datagenList;
    dispatch(datagenListApplyFilters(sortField, sortReverse));
  }
);