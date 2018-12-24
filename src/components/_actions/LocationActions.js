import { createRoutine } from 'redux-saga-routines';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import api from '../../config/api';

export const fetchSearchHints = createRoutine('SEARCH_HINTS_FETCH');
export const fetchCurrentLocation = createRoutine('CURRENT_LOCATION_FETCH');
export const selectLocation = createRoutine('LOCATION_SELECT');

function* searchHintsWorker({ payload }) {
  yield put(fetchSearchHints.request());
  yield call(delay, 300);
  try {
    const res = yield call(() => api.getLocationByQuery(decodeURI(payload)));
    if (res.status === 200) {
      yield put(fetchSearchHints.success(res.data.slice(0, 6)));
    } else {
      yield put(fetchSearchHints.failure());
    }
  } catch (e) {
    yield put(fetchSearchHints.failure());
    console.error(e);
  }
}

function* currentLocationWorker({ payload }) {
  yield put(fetchCurrentLocation.request());
  try {
    const res = yield call(() => api.getLocationByCoords(payload));
    const city = res.data[0];
    if (res.status === 200 && city) {
      yield put(
        fetchCurrentLocation.success({
          id: city.woeid,
          title: city.title,
        })
      );
    } else {
      yield put(fetchCurrentLocation.failure());
    }
  } catch (e) {
    yield put(fetchSearchHints.failure());
    console.error(e);
  }
}

export function* locationSearchWatcher() {
  yield all([
    takeLatest(fetchSearchHints.TRIGGER, searchHintsWorker),
    takeLatest(fetchCurrentLocation.TRIGGER, currentLocationWorker),
  ]);
}
