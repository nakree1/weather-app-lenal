import React from 'react';
import moment from 'moment';
import ForecastStateIcon from './ForecastStateIcon';

export default class ForecastDay extends React.Component {
  handleSelect = () => {
    this.props.selectCurrentDate(this.props.data.applicable_date);
  };

  render() {
    const { applicable_date, weather_state_name, weather_state_abbr, the_temp, wind_speed } = this.props.data;
    const { isActive } = this.props;

    const date = moment(applicable_date, 'YYYY-MM-DD');
    return (
      <div className={`forecast__day ${isActive ? 'active' : ''}`} onClick={this.handleSelect}>
        <div className="forecast__item forecast__item_header">{date.format('dddd')}</div>
        <div className="forecast__item">
          <div className="icon_wrap">
            <i className="far fa-calendar-alt" />
          </div>
          <span className="forecast__content">{date.format('MMM D')}</span>
        </div>
        <div className="forecast__item">
          <ForecastStateIcon state={weather_state_abbr} />
          <span className="forecast__content">{weather_state_name}</span>
        </div>
        <div className="forecast__item">
          <div className="icon_wrap">
            <i className="fas fa-thermometer-half" />
          </div>
          <span className="forecast__content">{the_temp.toFixed()} °C</span>
        </div>
        <div className="forecast__item">
          <div className="icon_wrap">
            <i className="fas fa-wind" />
          </div>
          <span className="forecast__content">{wind_speed.toFixed(1)} mph</span>
        </div>
      </div>
    );
  }
}
