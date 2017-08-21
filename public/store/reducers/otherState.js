const defaultState = {
  foo: 'bar'
};

export const otherState = (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};
