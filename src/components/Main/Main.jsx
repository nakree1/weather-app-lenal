import React from 'react';
import ForecastContainer from '../Forecast/ForecastContainer';
import LocationContainer from '../Location/LocationContainer';
import Notes from '../Notes/Notes';

export default class Main extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="main-form">
          <LocationContainer />
        </div>
        <ForecastContainer />

        <Notes />
      </div>
    );
  }
}
