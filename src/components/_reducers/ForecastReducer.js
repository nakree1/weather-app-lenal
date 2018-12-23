import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import * as actions from '../_actions/ForecastActions';

const weekStatus = handleActions(
  {
    [actions.fetchForecast.REQUEST]() {
      return 'request';
    },
    [actions.fetchForecast.SUCCESS]() {
      return 'success';
    },
    [actions.fetchForecast.FAILURE]() {
      return 'failure';
    },
  },
  'none'
);

const weekData = handleActions(
  {
    [actions.fetchForecast.SUCCESS](state, { payload }) {
      return payload;
    },
    [actions.fetchForecast.FAILURE]() {
      return [];
    },
  },
  []
);

const week = combineReducers({
  status: weekStatus,
  data: weekData,
});

const forecast = combineReducers({
  week,
});

export default forecast;
