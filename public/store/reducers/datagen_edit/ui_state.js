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
  addDatasource
} from '../../actions/datagen_edit';

const defaultState = {
  selectedTabId: 'dataplan',
  currentDatasourceId: 'the_id_for_field2',
  bottomBarVisible: false
};

export const uiState = handleActions({
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
  }
}, defaultState);