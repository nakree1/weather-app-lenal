import { all, fork } from 'redux-saga/effects';
import { locationSearchWatcher } from './_actions/LocationActions';
import { forecastWatcher } from './_actions/ForecastActions';

export default function* rootSaga() {
  yield all([fork(locationSearchWatcher), fork(forecastWatcher)]);
}
