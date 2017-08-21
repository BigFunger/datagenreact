import { createAction } from 'redux-actions';
import { dataplansSetSort } from './dataplans';
import { createThunk } from 'redux-thunks';

export const datagenListSetSort = createThunk('DATAGEN_LIST_SET_SORT',
  ({ dispatch, getState, type }, field) => {
    const action = createAction(type);
    dispatch(action({ field }));

    const { sortField, sortReverse } = getState().datagenList;
    dispatch(dataplansSetSort(sortField, sortReverse));
  }
);