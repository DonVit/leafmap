import {combineReducers} from 'redux';
import MarkerReducer from './marker';
import MapReducer from './map'
import SpinReducer from './spin'

export default combineReducers({
  marker: MarkerReducer,
  map: MapReducer,
  spin: SpinReducer
})
