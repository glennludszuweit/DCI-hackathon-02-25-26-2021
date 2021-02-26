import * as api from '../api';

const air = {
  getAirPollutionData: (lat, lng) => async (dispatch) => {
    try {
      const { data } = await api.getAirPollutionData(lat, lng);
      console.log(data);
      const airQuality = data.list[0];
      dispatch({
        type: 'GET_AIRPOLLUTION',
        airData: airQuality,
        aqi: airQuality.main.aqi,
      });
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default air;
