import { createAction } from 'redux-actions';
import { createThunk } from 'redux-thunks';
import { newService } from 'plugins/datagenreact/services/new_service';

export const datagenListApplyFilters = createAction('DATAGEN_LIST_APPLY_FILTERS',
  (sortField, sortReverse) => ({ sortField, sortReverse })
);

export const datagenListSetSort = createThunk('DATAGEN_LIST_SET_SORT',
  ({ dispatch, getState, type }, field) => {
    const action = createAction(type);
    dispatch(action({ field }));

    const { sortField, sortReverse } = getState().datagenList;
    dispatch(datagenListApplyFilters(sortField, sortReverse));
  }
);

export const datagenFetchDataplansSuccess = createAction('DATAGEN_FETCH_DATAPLANS_SUCCESS', (dataplans) => ({ dataplans }));
export const datagenFetchDataplansError = createAction('DATAGEN_FETCH_DATAPLANS_ERROR', (error) => ({ error }));
export const datagenFetchDataplans = createThunk('DATAGEN_FETCH_DATAPLANS', 
  ({ dispatch, getState, type }) => {
    return newService.fetchDataplans()
      .then(dataplans => {
        dispatch(datagenFetchDataplansSuccess(dataplans));
      })
      .catch(error => {
        dispatch(datagenFetchDataplansError(error));
      });
  }
);