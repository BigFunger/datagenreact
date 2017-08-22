import { createStore, applyMiddleware } from 'redux';
import { datagenApp } from './reducers/datagen_app';
import thunk from 'redux-thunk';

// const test = {
//   datagenList: {
//     sortField: 'indexName',
//     sortReverse: true,
//     filteredDataplans: [],
//     dataplans: [
//       { id: "json", definition: { indexName: "nested-json", typeName: "doc", numberOfDocuments: 1000, dateCreated: new Date('8-17-2017').valueOf(), dateLastRun: new Date('8-17-2017').valueOf() } },
//       { id: "fxghdfghfdgsh", definition: { indexName: "sample-data", typeName: "dude", numberOfDocuments: 1000, dateCreated: new Date('8-15-2017').valueOf(), dateLastRun: new Date('8-16-2017').valueOf() } },
//       { id: "fdssd", definition: { indexName: "sample-data", typeName: "me", numberOfDocuments: 1000, dateCreated: new Date('8-15-2017').valueOf(), dateLastRun: new Date('8-16-2017').valueOf() } },
//       { id: "fxghdfgdsfghfdgsh", definition: { indexName: "sample-data", typeName: "you", numberOfDocuments: 1000, dateCreated: new Date('8-15-2017').valueOf(), dateLastRun: new Date('8-16-2017').valueOf() } },
//       { id: "fxghshgdfhdfghfdgsh", definition: { indexName: "sample-data", typeName: "record", numberOfDocuments: 1000, dateCreated: new Date('8-15-2017').valueOf(), dateLastRun: new Date('8-16-2017').valueOf() } },
//       { id: "fxghdsfdghsdfghfdgsh", definition: { indexName: "sample-data", typeName: "file", numberOfDocuments: 1000, dateCreated: new Date('8-15-2017').valueOf(), dateLastRun: new Date('8-16-2017').valueOf()  }}
//     ],
//     pageSize: 5,
//     pageNumber: 1
//   }
// };
const test = undefined;

export const store = createStore(
  datagenApp,
  test,
  applyMiddleware(thunk)
);

window.store = store;