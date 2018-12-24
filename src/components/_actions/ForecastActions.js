import { createRoutine } from 'redux-saga-routines';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../config/api';
import { selectLocation, fetchCurrentLocation } from './LocationActions';
import { selectCurrentDate } from './CurrentDateActions';

export const fetchForecast = createRoutine('FORECAST_FETCH');

function* getForecastWorker({ payload }) {
  yield put(fetchForecast.request());
  yield put(selectCurrentDate.trigger());
  try {
    const res = yield call(() => api.getForecastByCityId(payload.id));
    if (res.status === 200) {
      const weather = res.data.consolidated_weather;
      yield put(fetchForecast.success(weather));
      yield put(selectCurrentDate.trigger(weather[0].applicable_date));
    } else {
      console.error(res);
      yield put(fetchForecast.failure());
    }
  } catch (e) {
    yield put(fetchForecast.failure());
    console.error(e);
  }
}

export function* forecastWatcher() {
  yield all([
    takeLatest(selectLocation.TRIGGER, getForecastWorker),
    takeLatest(fetchCurrentLocation.SUCCESS, getForecastWorker),
  ]);
}
