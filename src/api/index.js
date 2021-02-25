import axios from 'axios';

const mapApiKey = 'H20LsGP6NC1MGqOsKA3A6McuOskn1Iqf';
const airPollutionApiKey = '40378e26c064ea4354dd1e2f0a5f91be';

export const getMapGeocode = (city) =>
  axios.get(
    `http://open.mapquestapi.com/geocoding/v1/address?key=${mapApiKey}&inFormat=kvp&outFormat=json&&thumbMaps=false&maxResult=1&location=${city}`
  );

export const getAirPollutionData = (lat, lng) =>
  axios.get(
    `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lng}&appid=${airPollutionApiKey}`
  );
