import { createRoutine } from 'redux-saga-routines';

export const selectNote = createRoutine('NOTE_SELECT');
export const createNote = createRoutine('NOTE_CREATE');
export const deleteNote = createRoutine('NOTE_DELETE');
export const saveNote = createRoutine('NOTE_SAVE');
