import { connect } from 'react-redux';
import { fetchSearchHints } from './LocationActions';
import Location from './Location';

const mapStateToProps = (state, props) => ({
  status: state.search.status,
  hints: state.search.hints,
});

const clearHints = fetchSearchHints.fulfill;

export default connect(mapStateToProps, {
  fetchSearchHints,
  clearHints
})(Location);

