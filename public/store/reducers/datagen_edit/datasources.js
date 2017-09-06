import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { datagenEditAddDatasource } from '../../actions/datagen_edit';


const byId = handleActions({
},
  {
    '1': {
      type: 'text',
      fieldName: 'field1'
    },
    '2': {
      type: 'date',
      fieldName: 'field2'
    },
    '3': {
      type: 'number',
      fieldName: 'field3'
    },
    '4': {
      type: 'text',
      fieldName: 'field4'
    }
  }
);

const allIds = handleActions({
}, ['1', '2', '3', '4']);

// export const datasources = handleActions({
//   // [datagenEditAddDatasource](state, action) {
//   //   return [...state];
//   //   console.log(action);
//   //   // const { dataplans } = action.payload;

//   //   // return dataplans.reduce((acc, dataplan) => {
//   //   //   acc[dataplan.id] = dataplan;
//   //   //   return acc;
//   //   // }, {});
//   // }
// }, [
//   {
//     id: '1',
//     type: 'text',
//     fieldName: 'field1',
//     details: {}
//   },
//   {
//     id: '2',
//     type: 'date',
//     fieldName: 'field2',
//     details: {}
//   },
//   {
//     id: '3',
//     type: 'number',
//     fieldName: 'field3',
//     details: {}
//   },
//   {
//     id: '4',
//     type: 'text',
//     fieldName: 'field4',
//     details: {}
//   }
// ]);

export const datasources = combineReducers({
  byId,
  allIds
});

export const getEditDatasource = (state, id) => {
  return datagenEdit.getEditDatasource(state.datasources, uiState.currentDatasourceId);
}

export const getAllDatasources = (state) => {
  return state.allIds.map(id => state.byId[id]);
}