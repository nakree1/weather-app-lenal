import { combineReducers } from 'redux';
import search from './_reducers/LocationSearchReducer'


const rootReducer = combineReducers({
  search
});

export default rootReducer