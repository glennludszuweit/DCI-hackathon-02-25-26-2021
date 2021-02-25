import * as api from '../api';

const geocode = {
  getMapGeocode: (city) => async (dispatch) => {
    try {
      const { data } = await api.getMapGeocode(city);
      const location = data.results[0].locations[0];
      dispatch({
        type: 'GET_GEOCODE',
        geocodeData: location,
      });
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default geocode;
