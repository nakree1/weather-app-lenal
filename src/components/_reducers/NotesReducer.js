import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import * as actions from '../_actions/NotesActions';

const mockData = {
  '2018-12-23': [
    { title: 'Header text', text: 'some note text' },
    { title: 'Second note', text: 'Some second note text' },
  ],
  '2018-12-25': [{ title: 'Lorem ipsum', text: 'Solor menum' }],
};

const isLoaded = handleActions({}, true);

const data = handleActions(
  {
    [actions.createNote.TRIGGER](state, { payload }) {
      if (state[payload.date]) {
        return {
          ...state,
          [payload.date]: [...state[payload.date], { title: payload.title, text: '' }],
        };
      } else {
        return {
          ...state,
          [payload.date]: [{ title: payload.title, text: '' }],
        };
      }
    },
    // [actions.selectCurrentDate.FULFILL]() {
    //   return '';
    // },
  },
  mockData
);

/*
data = {
    '2018-12-23': [
      { title: 'Header text', text: 'some note text' },
      { title: 'Second note', text: 'Some second note text' }
    ],
    '2018-12-25': [
      { title: 'Lorem ipsum', text: 'Solor menum' }
    ]
}
*/

const notes = combineReducers({
  isLoaded,
  data,
});

export default notes;
