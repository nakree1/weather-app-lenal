import { combineReducers } from 'redux';
import location from './_reducers/LocationSearchReducer';
import forecast from './_reducers/ForecastReducer';

const rootReducer = combineReducers({
  location,
  forecast,
});

export default rootReducer;
