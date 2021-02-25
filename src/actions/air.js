import * as api from '../api';

const air = {
  getAirPollutionData: (lat, lng) => async (dispatch) => {
    try {
      const { data } = await api.getAirPollutionData(lat, lng);
      const airQuality = data.list[0].components;
      dispatch({
        type: 'GET_AIRPOLLUTION',
        airData: airQuality,
      });
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default air;
