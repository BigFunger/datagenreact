import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  updateDataplan,
  updateDatasource,
  setTab,
  datagenEditLoadDatasource,
  save,
  discard,
  deleteDatasource,
  addDatasource,
  load,
  loadError,
  loadSuccess,
  newDataplan
} from '../../actions/datagen_edit';

const defaultState = {
  selectedTabId: 'dataplan',
  currentDatasourceId: null,
  bottomBarVisible: false,
  error: null,
  loading: false,
};

export const uiState = handleActions({
  [load](state, action) {
    return {
      ...state,
      loading: true,
      error: null
    };
  },
  [loadSuccess](state, action) {
    const currentDatasourceId = action.payload.datasources.allIds[0];

    return {
      ...defaultState,
      currentDatasourceId,
      loading: false
    };
  },
  [loadError](state, action) {
    const { error } = action.payload;

    return {
      ...state,
      loading: false,
      error
    };
  },
  [save](state, action) {
    return {
      ...state,
      bottomBarVisible: false
    };
  },
  [discard](state, action) {
    return {
      ...state,
      bottomBarVisible: false
    };
  },
  [updateDataplan](state, action) {
    return {
      ...state,
      bottomBarVisible: true
    };
  },
  [updateDatasource](state, action) {
    return {
      ...state,
      bottomBarVisible: true
    };
  },
  [setTab](state, action) {
    const { id } = action.payload;
    
    return {
      ...state,
      selectedTabId: id
    };
  },
  [datagenEditLoadDatasource](state, action) {
    const { id } = action.payload;

    return {
      ...state,
      currentDatasourceId: id
    };
  },
  [deleteDatasource](state, action) {
    return {
      ...state,
      currentDatasourceId: null
    };
  },
  [addDatasource](state, action) {
    const { id } = action.payload;

    return {
      ...state,
      currentDatasourceId: id
    };
  },
  [newDataplan](state, action) {
    return {
      ...defaultState
    };
  }
}, defaultState);