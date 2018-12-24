import { connect } from 'react-redux';
import Forecast from './Forecast';
import { selectCurrentDate } from '../_actions/CurrentDateActions';

const mapStateToProps = state => ({
  data: state.forecast.data,
  status: state.forecast.status,
  currentDate: state.currentDate,
});

export default connect(
  mapStateToProps,
  { selectCurrentDate }
)(Forecast);
