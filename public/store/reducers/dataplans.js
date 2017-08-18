import { sortByOrder } from 'lodash';

const defaultState = [
  { id: "json", indexName: "nested-json", typeName: "doc", numberOfDocuments: 1000, dateCreated: new Date('8-17-2017').valueOf(), dateLastRun: new Date('8-17-2017').valueOf() },
  { id: "fxghdfghfdgsh", indexName: "sample-data", typeName: "doc", numberOfDocuments: 1000, dateCreated: new Date('8-15-2017').valueOf(), dateLastRun: new Date('8-16-2017').valueOf() }
];

export const dataplans = (state = defaultState, action) => {
  const { type } = action;

  switch(type) {
    case 'DATAGEN_LIST_SET_SORT':
      const { sortField, sortReverse } = action;
      const direction = sortReverse ? 'desc' : 'asc';

      return sortByOrder(state, [sortField], [direction]);
    default:
      return state;
  }
};
