import { createAction } from 'redux-actions';

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
  
export const save =
  createAction('DATAGEN_EDIT_SAVE');
  
export const discard =
  createAction('DATAGEN_EDIT_DISCARD');