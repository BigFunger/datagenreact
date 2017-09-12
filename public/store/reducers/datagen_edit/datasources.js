import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  addDatasource,
  deleteDatasource,
  updateDatasource
} from '../../actions/datagen_edit';

//TODO: Playing around with keeping a copy of the id value in the object.
// this simplifies the code, but isn't quite DRY.
const byId = handleActions({
  [updateDatasource](state, action) {
    const { datasource } = action.payload;

    return {
      ...state,
      [datasource.id]: { ...datasource }
    };
  },
  [deleteDatasource](state, action) {
    const { id } = action.payload;

    const result = { ...state };
    delete result[id];

    return result;
  }
},
  {
    'the_id_for_field1': {
      id: 'the_id_for_field1',
      type: 'text',
      field: 'field1',
      detail: {
        text: 'text value for field 1'
      }
    },
    'the_id_for_field2': {
      id: 'the_id_for_field2',
      type: 'date',
      field: 'field2',
      detail: {
        text: 'text value for field 2'
      }
    },
    'the_id_for_field3': {
      id: 'the_id_for_field3',
      type: 'number',
      field: 'field3',
      detail: {
        length: 10
      }
    },
    'the_id_for_field4': {
      id: 'the_id_for_field4',
      type: 'text',
      field: 'field4',
      detail: {
        text: 'text value for field 4'
      }
    }
  }
);

const allIds = handleActions({
  [deleteDatasource](state, action) {
    const { id } = action.payload;
    const index = state.indexOf(id);

    return [
      ...state.slice(0, index),
      ...state.slice(index + 1)
    ];
  }
}, ['the_id_for_field1', 'the_id_for_field2', 'the_id_for_field3', 'the_id_for_field4']);

export const datasources = combineReducers({
  byId,
  allIds
});

export const getEditDatasource = (state, id) => {
  return state.byId[id];
}

export const getAllDatasources = (state) => {
  return state.allIds.map(id => state.byId[id]);
}