import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import * as actions from '../_actions/NotesActions';
import { selectCurrentDate } from '../_actions/CurrentDateActions';

import getId from '../../utils/getId';

const isLoaded = handleActions({}, true);

const selected = handleActions(
  {
    [actions.selectNote.TRIGGER](state, { payload }) {
      return payload;
    },
    [actions.selectNote.FULFILL]() {
      return null;
    },
    [selectCurrentDate.TRIGGER]() {
      return null;
    },
    [selectCurrentDate.FULFILL]() {
      return null;
    },
  },
  null
);

const data = handleActions(
  {
    [actions.createNote.TRIGGER](state, { payload }) {
      if (state[payload.date]) {
        return {
          ...state,
          [payload.date]: [...state[payload.date], { id: getId(), title: payload.title, text: '' }],
        };
      } else {
        return {
          ...state,
          [payload.date]: [{ id: getId(), title: payload.title, text: '' }],
        };
      }
    },
    [actions.deleteNote.TRIGGER](state, { payload }) {
      if (state[payload.date]) {
        return {
          ...state,
          [payload.date]: state[payload.date].filter(item => item.id !== payload.id),
        };
      } else {
        return state;
      }
    },
    [actions.saveNote.TRIGGER](state, { payload }) {
      if (state[payload.date]) {
        const copyArr = [...state[payload.date]];
        const index = copyArr.findIndex(item => item.id === payload.id);
        copyArr[index] = {
          ...copyArr[index],
          text: payload.text,
        };
        return {
          ...state,
          [payload.date]: copyArr,
        };
      } else {
        return state;
      }
    },
  },
  JSON.parse(localStorage.getItem('notes')) || {}
);

const notes = combineReducers({
  isLoaded,
  selected,
  data,
});

export default notes;
