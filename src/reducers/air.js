const defaultState = {};
const air = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_AIRPOLLUTION':
      return {
        airData: action.airData,
        aqi: action.aqi,
      };

    default:
      return state;
  }
};
export default air;
