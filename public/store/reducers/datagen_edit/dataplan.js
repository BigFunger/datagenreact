import { handleActions } from 'redux-actions';
import {
  updateDataplan,
  loadSuccess
} from '../../actions/datagen_edit';

const defaultState = {
  id: 'dataplan-id-1234',
  indexName: 'myIndex',
  typeName: 'docs',
  numberOfDocuments: 1000,
  dateCreated: null
};

export const dataplan = handleActions({
  [updateDataplan](state, action) {
    // TODO: This seems really wrong. although I don't want to have to have a separate action
    // for each field. How are other people handling this?
    const { dataplan } = action.payload;
    
    return {
      ...state,
      ...dataplan
    };
  },
  [loadSuccess](state, action) {
    const { dataplan } = action.payload;
    return {
      ...dataplan
    };
  }
}, defaultState);