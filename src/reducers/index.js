import {combineReducers} from 'redux';
import MarkerReducer from './marker';
import MapReducer from './map'

export default combineReducers({
  marker: MarkerReducer,
  map: MapReducer
})
