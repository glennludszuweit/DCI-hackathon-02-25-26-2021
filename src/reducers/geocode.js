const defaultState = {};
const geocode = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_GEOCODE':
      return action.geocodeData;

    default:
      return state;
  }
};
export default geocode;
