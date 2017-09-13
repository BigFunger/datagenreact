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

export const newDataplan = createAction('DATAGEN_EDIT_NEW', ({ id }) => ({ id }));

export const load = createThunk('DATAGEN_EDIT_LOAD',
  ({ dispatch, getState, type }, { id }) => {
    dispatch(createAction(type)({ id }));

    return newService.loadDataplan(id)
      .then(({ dataplan, datasources }) => {
        dispatch(loadSuccess({ dataplan, datasources }));
      })
      .catch(error => {
        dispatch(loadError({ error }));
      });
    }
);

export const loadSuccess =
  createAction('DATAGEN_EDIT_LOAD_SUCCESS', ({ dataplan, datasources }) => ({ dataplan, datasources }));

export const loadError =
  createAction('DATAGEN_EDIT_LOAD_ERROR', ({ error }) => ({ error }));

export const save = createThunk('DATAGEN_EDIT_SAVE', 
  ({ dispatch, getState, type }) => {
    const {
      datagenEdit: {
        dataplan,
        datasources
      }
    } = getState();

    //TODO: This feels wrong since I'm modifying the 'state'.
    //Not sure where or how I would do this otherwise.
    dataplan.dateCreated = Date.now();

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

  
import { buildMapping } from 'plugins/datagenreact/../server/routes/generate/build_mapping';
export const generateData = createThunk('DATAGEN_EDIT_GENERATE_DATA', 
  ({ dispatch, getState, type }) => {
    const {
      datagenEdit: {
        dataplan,
        datasources
      }
    } = getState();

    dispatch(createAction(type)({ dataplan, datasources }));

    return newService.generateData(dataplan, datasources)
      .then(() => {
        dispatch(generateDataSuccess());
      })
      .catch(error => {
        dispatch(generateDataError({ error }));
      });
  }
);

export const generateDataSuccess =
  createAction('DATAGEN_EDIT_GENERATE_DATA_SUCCESS');

export const generateDataError =
  createAction('DATAGEN_EDIT_GENERATE_DATA_ERROR', ({ error }) => ({ error }));