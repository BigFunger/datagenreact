import { handleActions } from 'redux-actions';
import {
  updateDataplan
} from '../../actions/datagen_edit';

const defaultState = {
  indexName: 'myIndex',
  typeName: 'docs',
  numberOfDocuments: 1000
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
  }
}, defaultState);