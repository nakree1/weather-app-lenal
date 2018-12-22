import { connect } from 'react-redux';
import Forecast from './Forecast';

const mapStateToProps = state => ({
  data: state.forecast.week.data,
  status: state.forecast.week.status,
});

export default connect(
  mapStateToProps,
  {}
)(Forecast);
