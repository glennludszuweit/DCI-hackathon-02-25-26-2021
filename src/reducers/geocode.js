const defaultState = { lat: '', lon: '' };
const geocode = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_GEOCODE':
      return {
        lat: action.lat,
        lon: action.lon,
      };

    default:
      return state;
  }
};
export default geocode;
