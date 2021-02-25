import * as api from '../api';

const Geocode = {
  getMapGeocode: (city) => async (dispatch) => {
    try {
      const res = await api.getMapGeocode(city);
      console.log(res);
      dispatch({
        type: 'GET_GEOCODE',
        lat: '',
        lon: '',
      });
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default Geocode;
