import React from 'react';
import moment from 'moment';
import ForecastStateIcon from './ForecastStateIcon';

export default class ForecastDetails extends React.Component {
  render() {
    const { currentDate, data } = this.props;

    if (!currentDate) return null;

    const weather = data.find(item => item.applicable_date === currentDate);

    const momentDate = moment(currentDate, 'YYYY-MM-DD');

    return (
      <div className="forecast__details">
        <div className="forecast__block forecast__block-column">
          <div className="forecast__block-day">{momentDate.format('dddd')}</div>
          <div className="forecast__block-date">{momentDate.format('MMMM D, YYYY')}</div>
        </div>

        <div className="forecast__block forecast__block-column">
          <div className="forecast__block-temp">Max: {weather.max_temp.toFixed(1)} °C</div>
          <div className="forecast__block-temp">Min: {weather.min_temp.toFixed(1)} °C</div>
          <div className="forecast__block-temp">Wind: {weather.wind_speed.toFixed(1)} mph</div>
          <div className="forecast__block-humidity">Humidity: {weather.humidity.toFixed(1)} %</div>
        </div>
        <div className="forecast__block forecast__block-column">
          <div className="forecast__block-state">
            <div className="forecast__block-current_temp">
              {weather.the_temp.toFixed(1)} °C
              <br />
              {weather.weather_state_name}
            </div>
            <ForecastStateIcon state={weather.weather_state_abbr} />
          </div>

          <div className="forecast__block-wind" />
        </div>
      </div>
    );
  }
}
