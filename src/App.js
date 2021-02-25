import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { air, geocode } from './actions';
import Body from './components/Body/Body';
import Header from './components/Header/Header';

function App() {
  const dispatch = useDispatch();
  const geocodeData = useSelector((state) => state.geocode.geocodeData);
  const latitude = useSelector((state) => state.geocode.latitude);
  const longitude = useSelector((state) => state.geocode.longitude);
  const airData = useSelector((state) => state.air);
  const [city, setCity] = useState('Dusseldorf');

  useEffect(() => {
    dispatch(geocode.getMapGeocode(city));
    dispatch(air.getAirPollutionData(latitude, longitude));
  }, [dispatch, city, latitude, longitude]);

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
