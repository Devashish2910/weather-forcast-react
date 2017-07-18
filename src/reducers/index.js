import { combineReducers } from 'redux';
import  weatherData  from './reducer-weather';

const rootReducer = combineReducers({
  weatherData
});

export default rootReducer;
