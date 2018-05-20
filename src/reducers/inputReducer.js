export default (state = '', action) => {
  switch (action.type) {
    case 'INPUT_CHANGED': {
      console.log(state);
      console.log(action.payload);
      return action.payload;
    }
    default:
      return state;
  }
};
