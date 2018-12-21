import React from 'react';
import ForecastDay from './ForecastDay/ForecastDay';

const data = [
  {
    id:	4701082705985536,
    weather_state_name:	"Showers",
    weather_state_abbr:	"s",
    wind_direction_compass:	"WSW",
    created:	"2018-12-21T12:22:01.972322Z",
    applicable_date:	"2018-12-21",
    min_temp:	8.2725,
    max_temp:	12.605,
    the_temp:	11.370000000000001,
    wind_speed:	14.338858754738329,
    wind_direction:	249.87596385917237,
    air_pressure:	1002.4300000000001,
    humidity:	82,
    visibility:	12.134136642010656,
    predictability:	73
  },
  {
    id:	47010827059834236,
    weather_state_name:	"Showers",
    weather_state_abbr:	"s",
    wind_direction_compass:	"WSW",
    created:	"2018-12-21T12:22:01.972322Z",
    applicable_date:	"2018-12-22",
    min_temp:	10.2725,
    max_temp:	15.605,
    the_temp:	13.370000000000001,
    wind_speed:	6.338,
    wind_direction:	189.87596385917237,
    air_pressure:	1012.4300000000001,
    humidity:	82,
    visibility:	12.134136642010656,
    predictability:	73
  },
  {
    id:	4701082705985536,
    weather_state_name:	"Showers",
    weather_state_abbr:	"s",
    wind_direction_compass:	"WSW",
    created:	"2018-12-21T12:22:01.972322Z",
    applicable_date:	"2018-12-21",
    min_temp:	8.2725,
    max_temp:	12.605,
    the_temp:	11.370000000000001,
    wind_speed:	14.338858754738329,
    wind_direction:	249.87596385917237,
    air_pressure:	1002.4300000000001,
    humidity:	82,
    visibility:	12.134136642010656,
    predictability:	73
  },
  {
    id:	47010827059834236,
    weather_state_name:	"Showers",
    weather_state_abbr:	"s",
    wind_direction_compass:	"WSW",
    created:	"2018-12-21T12:22:01.972322Z",
    applicable_date:	"2018-12-22",
    min_temp:	10.2725,
    max_temp:	15.605,
    the_temp:	13.370000000000001,
    wind_speed:	6.338,
    wind_direction:	189.87596385917237,
    air_pressure:	1012.4300000000001,
    humidity:	82,
    visibility:	12.134136642010656,
    predictability:	73
  },
  ,
  {
    id:	47010827059834236,
    weather_state_name:	"Showers",
    weather_state_abbr:	"s",
    wind_direction_compass:	"WSW",
    created:	"2018-12-21T12:22:01.972322Z",
    applicable_date:	"2018-12-22",
    min_temp:	10.2725,
    max_temp:	15.605,
    the_temp:	13.370000000000001,
    wind_speed:	6.338,
    wind_direction:	189.87596385917237,
    air_pressure:	1012.4300000000001,
    humidity:	82,
    visibility:	12.134136642010656,
    predictability:	73
  },
  {
    id:	4701082705985536,
    weather_state_name:	"Showers",
    weather_state_abbr:	"s",
    wind_direction_compass:	"WSW",
    created:	"2018-12-21T12:22:01.972322Z",
    applicable_date:	"2018-12-21",
    min_temp:	8.2725,
    max_temp:	12.605,
    the_temp:	11.370000000000001,
    wind_speed:	14.338858754738329,
    wind_direction:	249.87596385917237,
    air_pressure:	1002.4300000000001,
    humidity:	82,
    visibility:	12.134136642010656,
    predictability:	73
  },
  {
    id:	47010827059834236,
    weather_state_name:	"Showers",
    weather_state_abbr:	"s",
    wind_direction_compass:	"WSW",
    created:	"2018-12-21T12:22:01.972322Z",
    applicable_date:	"2018-12-22",
    min_temp:	10.2725,
    max_temp:	15.605,
    the_temp:	13.370000000000001,
    wind_speed:	6.338,
    wind_direction:	189.87596385917237,
    air_pressure:	1012.4300000000001,
    humidity:	82,
    visibility:	12.134136642010656,
    predictability:	73
  },
]

export default class Forecast extends React.Component {
  render() {
    const weekForecast = data.map((day) => <ForecastDay data={day}/>)

    return (
      <div className="forecast">
        <div className="forecast__week">
          {weekForecast}
        </div>
        <div className="forecast__details"></div>
      </div>
    )
  }
}