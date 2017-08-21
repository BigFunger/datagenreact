import { createStore } from 'redux';
import { datagenApp } from './reducers/datagen_app';

const test = {
  datagenList: {
    sortField: 'indexName',
    sortReverse: true,
    dataplans: [
      { id: "json", indexName: "nested-json", typeName: "doc", numberOfDocuments: 1000, dateCreated: new Date('8-17-2017').valueOf(), dateLastRun: new Date('8-17-2017').valueOf() },
      { id: "fxghdfghfdgsh", indexName: "sample-data", typeName: "dude", numberOfDocuments: 1000, dateCreated: new Date('8-15-2017').valueOf(), dateLastRun: new Date('8-16-2017').valueOf() },
      { id: "fdssd", indexName: "sample-data", typeName: "me", numberOfDocuments: 1000, dateCreated: new Date('8-15-2017').valueOf(), dateLastRun: new Date('8-16-2017').valueOf() },
      { id: "fxghdfgdsfghfdgsh", indexName: "sample-data", typeName: "you", numberOfDocuments: 1000, dateCreated: new Date('8-15-2017').valueOf(), dateLastRun: new Date('8-16-2017').valueOf() },
      { id: "fxghshgdfhdfghfdgsh", indexName: "sample-data", typeName: "record", numberOfDocuments: 1000, dateCreated: new Date('8-15-2017').valueOf(), dateLastRun: new Date('8-16-2017').valueOf() },
      { id: "fxghdsfdghsdfghfdgsh", indexName: "sample-data", typeName: "file", numberOfDocuments: 1000, dateCreated: new Date('8-15-2017').valueOf(), dateLastRun: new Date('8-16-2017').valueOf() }
    ]
  }
};

export const store = createStore(
  datagenApp,
  test
);