import React from 'react';
import moment from 'moment';

export default class ForecastDay extends React.Component {
  render() {
    const { applicable_date, min_temp, max_temp, humidity } = this.props.data;

    const date = moment(applicable_date, 'YYYY-MM-DD');
    return (
      <div className="forecast__item">
        <div className="forecast__item forecast__item_label">{date.format('dddd')}</div>
        <div className="forecast__item forecast__item_label">{date.format('MMMM d, YYYY')}</div>
        <div className="forecast__item forecast__item_temp">{min_temp} C</div>
        <div className="forecast__item forecast__item_temp">{max_temp} C</div>
        <div className="forecast__item forecast__item_humidity">{humidity}</div>
        <div className="forecast__item forecast__item_wind">2 m/s</div>
      </div>
    );
  }
}
