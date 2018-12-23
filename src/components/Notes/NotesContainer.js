import { connect } from 'react-redux';
import Notes from './Notes';
import { createNote } from '../_actions/NotesActions';

const mapStateToProps = state => ({
  isLoaded: state.currentDate !== '',
  data: state.notes.data[state.currentDate] || [],
  currentDate: state.currentDate,
});

export default connect(
  mapStateToProps,
  { createNote }
)(Notes);
