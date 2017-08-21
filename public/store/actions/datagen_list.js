import { createAction } from 'redux-actions';
import { dataplansSetSort } from './dataplans';

export const datagenListSetSort = (field) => {
  return (dispatch, getState) => {
    const action = createAction('DATAGEN_LIST_SET_SORT');
    dispatch(action({ field }));

    const { sortField, sortReverse } = getState().datagenList;
    dispatch(dataplansSetSort(sortField, sortReverse));
  };
};

datagenListSetSort.toString = () => 'DATAGEN_LIST_SET_SORT';