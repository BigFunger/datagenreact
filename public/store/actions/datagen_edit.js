import { createAction } from 'redux-actions';
import { createThunk } from 'redux-thunks';
import { newService } from 'plugins/datagenreact/services/new_service';

export const setTab =
  createAction('DATAGEN_EDIT_SET_TAB', ({ id }) => ({ id }));

export const addDatasource =
  createAction('DATAGEN_EDIT_ADD_DATASOURCE', ({ id }) => ({ id }));
  
export const deleteDatasource =
  createAction('DATAGEN_EDIT_DELETE_DATASOURCE');

export const datagenEditLoadDatasource =
  createAction('DATAGEN_EDIT_LOAD_DATASOURCE', ({ id }) => ({ id }));

export const updateDatasource =
  createAction('DATAGEN_EDIT_UPDATE_DATASOUCE', ({ datasource }) => ({ datasource }));
  
export const updateDataplan =
  createAction('DATAGEN_EDIT_UPDATE_DATAPLAN', ({ dataplan }) => ({ dataplan }));
  
export const save = createThunk('DATAGEN_EDIT_SAVE', 
  ({ dispatch, getState, type }) => {
    const {
      datagenEdit: {
        dataplan,
        datasources
      }
    } = getState();

    dispatch(createAction(type)({ dataplan, datasources }));

    return newService.saveDataplan(dataplan, datasources)
      .then(() => {
        dispatch(saveSuccess());
      })
      .catch(error => {
        dispatch(saveError({ error }));
      });
    }
);

export const saveSuccess =
  createAction('DATAGEN_EDIT_SAVE_SUCCESS');

export const saveError =
  createAction('DATAGEN_EDIT_SAVE_ERROR', ({ error }) => ({ error }));
  
export const discard =
  createAction('DATAGEN_EDIT_DISCARD');