import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { air, geocode } from './actions';
import Body from './components/Body/Body';
import Header from './components/Header/Header';

function App() {
  const dispatch = useDispatch();
  const geocodeData = useSelector((state) => state.geocode);
  const airData = useSelector((state) => state.air);
  const [city, setCity] = useState('Dusseldorf');

  const latitude = async () => await geocodeData.latLng.lat;
  const longitude = async () => await geocodeData.latLng.lng;

  useEffect(async () => {
    dispatch(geocode.getMapGeocode(city));
    dispatch(air.getAirPollutionData(await latitude(), await longitude()));
  }, [dispatch, city]);

  return (
    <>
      <Header
        geocodeData={geocodeData}
        airData={airData}
        city={city}
        setCity={setCity}
      />
      <Body />
    </>
  );
}

export default App;
