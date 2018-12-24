import React from 'react';
import ForecastContainer from '../Forecast/ForecastContainer';
import LocationContainer from '../Location/LocationContainer';
import NotesContainer from '../Notes/NotesContainer';

export default class Main extends React.Component {
  render() {
    return (
      <div className="content">
        <LocationContainer />
        <ForecastContainer />
        <NotesContainer />
      </div>
    );
  }
}
