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

export const dataplans = (state = [], action) => {
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
