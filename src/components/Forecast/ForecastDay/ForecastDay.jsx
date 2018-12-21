import React from 'react';

export default class ForecastDay extends React.Component {
  render () {
    const {applicable_date, min_temp, max_temp, humidity} = this.props.data
    return (
      <div className="forecast__item">
        <div className="forecast__item forecast__item_label">
          {applicable_date}
        </div>
        <div className="forecast__item forecast__item_temp">
          {min_temp} C
        </div>
        <div className="forecast__item forecast__item_temp">
          {max_temp} C
        </div>
        <div className="forecast__item forecast__item_humidity">
          {humidity}
        </div>
        <div className="forecast__item forecast__item_wind">
          2 m/s
        </div>
      </div>
    );
  }
}