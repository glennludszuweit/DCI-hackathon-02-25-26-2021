const defaultState = {};
const air = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_AIRPOLLUTION':
      return action.airData;

    default:
      return state;
  }
};
export default air;
