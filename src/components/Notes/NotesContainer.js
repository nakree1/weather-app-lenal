import { connect } from 'react-redux';
import Notes from './Notes';
import { createNote, deleteNote, saveNote, selectNote } from '../_actions/NotesActions';

const mapStateToProps = state => ({
  isLoaded: state.currentDate !== '',
  selected: state.notes.selected,
  data: state.notes.data[state.currentDate] || [],
  currentDate: state.currentDate,
});

const clearSelection = selectNote.fulfill;
export default connect(
  mapStateToProps,
  { createNote, deleteNote, saveNote, selectNote, clearSelection }
)(Notes);
