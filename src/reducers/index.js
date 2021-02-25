import { combineReducers } from 'redux';
import geocode from './geocode';
import air from './air';

export default combineReducers({
  geocode,
  air,
});
