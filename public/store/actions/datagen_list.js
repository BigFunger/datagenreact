import { pick } from 'lodash';
import { createAction } from 'redux-actions';
import { createThunk } from 'redux-thunks';
import { newService } from 'plugins/datagenreact/services/new_service';

export const datagenListSetSort =
  createAction('DATAGEN_LIST_SET_SORT', ({ field }) => ({ field }));

export const datagenListSetPage =
  createAction('DATAGEN_LIST_SET_PAGE', ({ pageNumber }) => ({ pageNumber }));

export const datagenFetchDataplansSuccess =
  createAction('DATAGEN_FETCH_DATAPLANS_SUCCESS', ({ dataplans }) => ({ dataplans }));
  
export const datagenFetchDataplansError =
  createAction('DATAGEN_FETCH_DATAPLANS_ERROR', ({ error }) => ({ error }));

export const datagenFetchDataplans = createThunk('DATAGEN_FETCH_DATAPLANS', 
  ({ dispatch, getState, type }) => {
    dispatch(createAction(type)());

    return newService.fetchDataplans()
      .then(dataplans => {
        dispatch(datagenFetchDataplansSuccess({ dataplans }));
      })
      .catch(error => {
        dispatch(datagenFetchDataplansError({ error }));
      });
  }
);