import { connect } from 'react-redux';
import { fetchSearchHints, fetchCurrentLocation, selectLocation } from './LocationActions';
import Location from './Location';

const mapStateToProps = (state, props) => ({
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
  }
)(Location);
