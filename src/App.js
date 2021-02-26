import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { air, geocode } from './actions';
import Body from './components/Body/Body';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';

function App() {
  const dispatch = useDispatch();
  const geocodeData = useSelector((state) => state.geocode.geocodeData);
  const latitude = useSelector((state) => state.geocode.latitude);
  const longitude = useSelector((state) => state.geocode.longitude);
  const airData = useSelector((state) => state.air.airData);
  const AQI = useSelector((state) => state.air.aqi);
  const [city, setCity] = useState('Dusseldorf');

  useEffect(() => {
    setTimeout(() => {
      dispatch(geocode.getMapGeocode(city));
      dispatch(air.getAirPollutionData(latitude, longitude));
    }, 1000);
  }, [dispatch, city, latitude, longitude]);

  return geocodeData && airData ? (
    <>
      <Header
        geocodeData={geocodeData}
        airData={airData}
        AQI={AQI}
        city={city}
        setCity={setCity}
      />
      <Body AQI={AQI} />
      <About />
      <Footer />
    </>
  ) : (
    <Loading />
  );
}

export default App;
