const dataplan = (state, action) => {
  switch(action.type) {
    case 'ADD_DATAPLAN':
      return {
        name: action.name
      };
    default:
      return state;
  }
}

const defaultState = [
  { id: "json", indexName: "nested-json", typeName: "doc", numberOfDocuments: 1000, dateCreated: new Date('8-17-2017').valueOf(), dateLastRun: new Date('8-17-2017').valueOf() },
  { id: "fxghdfghfdgsh", indexName: "sample-data", typeName: "doc", numberOfDocuments: 1000, dateCreated: new Date('8-15-2017').valueOf(), dateLastRun: new Date('8-16-2017').valueOf() }
];

export const dataplans = (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_DATAPLAN':
      return [
        ...state,
        dataplan(undefined, action)
      ];
    default:
      return state;
  }
};
