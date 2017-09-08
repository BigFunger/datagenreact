import { createAction } from 'redux-actions';

export const setTab =
  createAction('DATAGEN_EDIT_SET_TAB', ({ id }) => ({ id }));

export const datagenEditAddDatasource =
  createAction('DATAGEN_EDIT_ADD_DATASOURCE');

export const datagenEditLoadDatasource =
  createAction('DATAGEN_EDIT_LOAD_DATASOURCE', ({ id }) => ({ id }));

export const updateDatasource =
  createAction('DATAGEN_EDIT_UPDATE_DATASOUCE', ({ datasource }) => ({ datasource }));