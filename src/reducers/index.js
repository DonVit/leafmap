import {combineReducers} from 'redux';
import UserReducer from './users';
import MapReducer from './map'

export default combineReducers({
  users: UserReducer,
  map: MapReducer
})
