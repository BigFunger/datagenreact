import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  setTab,
  datagenEditLoadDatasource
} from '../../actions/datagen_edit';

const defaultState = {
  selectedTabId: 'dataplan',
  currentDatasourceId: 'the_id_for_field2'
};

export const uiState = handleActions({
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
  }
}, defaultState);