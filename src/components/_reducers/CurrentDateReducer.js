import { handleActions } from 'redux-actions';

import * as actions from '../_actions/CurrentDateActions';

const currentDate = handleActions(
  {
    [actions.selectCurrentDate.TRIGGER](state, { payload }) {
      return payload;
    },
    [actions.selectCurrentDate.FULFILL]() {
      return '';
    },
  },
  ''
);

export default currentDate;
