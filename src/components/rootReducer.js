import { combineReducers } from 'redux';
import location from './_reducers/LocationSearchReducer';
import forecast from './_reducers/ForecastReducer';
import notes from './_reducers/NotesReducer';
import currentDate from './_reducers/CurrentDateReducer';

const rootReducer = combineReducers({
  currentDate,
  location,
  forecast,
  notes,
});

export default rootReducer;
