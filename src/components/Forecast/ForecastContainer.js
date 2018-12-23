import { connect } from 'react-redux';
import Forecast from './Forecast';
import { selectCurrentDate } from '../_actions/CurrentDateActions';

const mapStateToProps = state => ({
  data: state.forecast.week.data,
  status: state.forecast.week.status,
  currentDate: state.currentDate,
});

export default connect(
  mapStateToProps,
  { selectCurrentDate }
)(Forecast);
