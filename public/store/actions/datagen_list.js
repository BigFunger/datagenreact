import { pick } from 'lodash';
import { createAction } from 'redux-actions';
import { createThunk } from 'redux-thunks';
import { newService } from 'plugins/datagenreact/services/new_service';

const dataplansApplyFilters = (dispatch, getState) => {
  const {
    datagenList: {
      dataplans,
      table: {
        sortField,
        sortReverse,
        pageStartIndex,
        pageSize
      }
    }
  } = getState();

  dispatch(datagenListApplyFilters({
    dataplans,
    sortField,
    sortReverse,
    pageStartIndex,
    pageSize
  }));
}

export const datagenListApplyFilters = createAction('DATAGEN_LIST_APPLY_FILTERS');
export const datagenListSetSort = createThunk('DATAGEN_LIST_SET_SORT',
  ({ dispatch, getState, type }, { field }) => {
    dispatch(createAction(type)({ field }));

    dataplansApplyFilters(dispatch, getState);
  }
);

export const datagenFetchDataplansSuccess = createThunk('DATAGEN_FETCH_DATAPLANS_SUCCESS', 
  ({ dispatch, getState, type }, { dataplans }) => {
    dispatch(createAction(type)({ dataplans }));

    dataplansApplyFilters(dispatch, getState);
  }
);
export const datagenFetchDataplansError = createAction('DATAGEN_FETCH_DATAPLANS_ERROR', (error) => ({ error }));
export const datagenFetchDataplans = createThunk('DATAGEN_FETCH_DATAPLANS', 
  ({ dispatch, getState, type }) => {
    dispatch(createAction(type)());

    return newService.fetchDataplans()
      .then(dataplans => {
        dispatch(datagenFetchDataplansSuccess({ dataplans }));
      })
      .catch(error => {
        dispatch(datagenFetchDataplansError(error));
      });
  }
);

export const datagenListSetPage = createThunk('DATAGEN_LIST_SET_PAGE',
  ({ dispatch, getState, type }, { pageNumber }) => {
    const { datagenList: { dataplans } } = getState();
    dispatch(createAction(type)({ pageNumber, dataplans }));

    dataplansApplyFilters(dispatch, getState);
  }
);