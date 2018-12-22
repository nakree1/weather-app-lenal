import { all, fork } from 'redux-saga/effects';
import { locationSearchWatcher } from './Location/LocationActions';
import { forecastWatcher } from './Forecast/ForecastActions';

export default function* rootSaga() {
  yield all([fork(locationSearchWatcher), fork(forecastWatcher)]);
}
