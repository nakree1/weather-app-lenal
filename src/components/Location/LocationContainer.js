import { connect } from 'react-redux';
import { fetchSearchHints, fetchCurrentLocation, selectLocation } from '../_actions/LocationActions';
import { selectCurrentDate } from '../_actions/CurrentDateActions';
import Location from './Location';

const mapStateToProps = state => ({
  status: state.location.search.status,
  query: state.location.search.query,
  hints: state.location.search.hints,
  currentLocation: state.location.currentLocation,
});

const clearHints = fetchSearchHints.fulfill;

export default connect(
  mapStateToProps,
  {
    fetchSearchHints,
    fetchCurrentLocation,
    clearHints,
    selectLocation,
    selectCurrentDate,
  }
)(Location);
