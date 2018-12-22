import React from 'react';
import ForecastDay from './ForecastDay/ForecastDay';

export default class Forecast extends React.Component {
  render() {
    const { data, status } = this.props;

    if (status !== 'success') return null;

    const weekForecast = data.map(day => <ForecastDay data={day} />);

    return (
      <div className="forecast">
        <div className="forecast__week">{weekForecast}</div>
        <div className="forecast__details" />
      </div>
    );
  }
}
