import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { datagenEditLoadDatasource } from '../../actions/datagen_edit';

const defaultState = {
  currentDatasourceId: 'the_id_for_field2'
};

export const uiState = handleActions({
  [datagenEditLoadDatasource](state, action) {
    const { id } = action.payload;

    return {
      ...state,
      currentDatasourceId: id
    };
  }
}, defaultState);