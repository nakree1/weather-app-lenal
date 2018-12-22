import { createRoutine } from 'redux-saga-routines';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../config/api';
import { selectLocation } from '../Location/LocationActions';

export const fetchForecast = createRoutine('FORECAST_FETCH');

function* getForecastWorker({ payload }) {
  yield put(fetchForecast.request());
  try {
    const res = yield call(() => api.getForecastByCityId(payload.id));
    if (res.status === 200) {
      yield put(fetchForecast.success(res.data.consolidated_weather));
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
  yield all([takeLatest(selectLocation.TRIGGER, getForecastWorker)]);
}
