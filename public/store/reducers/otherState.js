const defaultState = {
  totalDataplans: 12
};

export const otherState = (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_DATAPLAN':
      return Object.assign({}, state, {
        totalDataplans: state.totalDataplans + 1
      });
    default:
      return state;
  }
};
