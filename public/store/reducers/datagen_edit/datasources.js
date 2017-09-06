import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { datagenEditAddDatasource } from '../../actions/datagen_edit';

const byId = handleActions({
},
  {
    'the_id_for_field1': {
      type: 'text',
      field: 'field1'
    },
    'the_id_for_field2': {
      type: 'date',
      field: 'field2'
    },
    'the_id_for_field3': {
      type: 'number',
      field: 'field3'
    },
    'the_id_for_field4': {
      type: 'text',
      field: 'field4'
    }
  }
);

const allIds = handleActions({
}, ['the_id_for_field1', 'the_id_for_field2', 'the_id_for_field3', 'the_id_for_field4']);

export const datasources = combineReducers({
  byId,
  allIds
});

export const getEditDatasource = (state, id) => {
  return { id, ...state.byId[id] };
}

export const getAllDatasources = (state) => {
  return state.allIds.map(id => ({ id, ...state.byId[id] }));
}