import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  addDatasource,
  deleteDatasource,
  updateDatasource,
  loadSuccess
} from '../../actions/datagen_edit';

//TODO: Playing around with keeping a copy of the id value in the object.
// this simplifies the code, but isn't quite DRY.
const byId = handleActions({
  [loadSuccess](state, action) {
    const { datasources: { byId } } = action.payload;
    return {
      ...byId
    };
  },
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
  },
  [addDatasource](state, action) {
    const { id } = action.payload;

    return {
      ...state,
      [id]: {
        id,
        type: 'text',
        detail: {}
      }
    };
  }
}, {});

const allIds = handleActions({
  [loadSuccess](state, action) {
    const { datasources: { allIds } } = action.payload;
    return [
      ...allIds
    ];
  },
  [deleteDatasource](state, action) {
    const { id } = action.payload;
    const index = state.indexOf(id);

    return [
      ...state.slice(0, index),
      ...state.slice(index + 1)
    ];
  },
  [addDatasource](state, action) {
    const { id } = action.payload;

    return [
      ...state,
      id
    ];
  }
}, []);

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