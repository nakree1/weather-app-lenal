import React from 'react';
import ForecastDay from './Items/ForecastDay';
import ForecastDetails from './Items/ForecastDetails';

export default class Forecast extends React.Component {
  render() {
    const { data, status, selectCurrentDate, currentDate } = this.props;

    if (status !== 'success') return null;

    const weekForecast = data.map(day => (
      <ForecastDay
        data={day}
        key={day.id}
        selectCurrentDate={selectCurrentDate}
        isActive={currentDate === day.applicable_date}
      />
    ));

    return (
      <div className="forecast">
        <div className="forecast__week">{weekForecast}</div>
        <ForecastDetails currentDate={currentDate} data={data} />
      </div>
    );
  }
}
