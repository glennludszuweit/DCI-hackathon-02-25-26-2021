import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { air, geocode } from './actions';

function App() {
  const dispatch = useDispatch();
  const geocodeData = useSelector((state) => state.geocode);

  useEffect(() => {
    dispatch(geocode.getMapGeocode('london'));

    setTimeout(() => {
      dispatch(
        air.getAirPollutionData(geocodeData.latLng.lat, geocodeData.latLng.lng)
      );
    }, 2000);
  }, [dispatch]);

  return <h1>App</h1>;
}

export default App;
