import { all, fork } from 'redux-saga/effects';
import { locationSearchWatcher } from './Location/LocationActions';

export default function* rootSaga() {
  yield all([
    fork(locationSearchWatcher),
    // fork(signUpWatcher)
  ]);
}
