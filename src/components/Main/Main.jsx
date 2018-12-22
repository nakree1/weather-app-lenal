import React from 'react';
import ForecastContainer from '../Forecast/ForecastContainer';
import LocationContainer from '../Location/LocationContainer';

export default class Main extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="main-form">
          <LocationContainer />
        </div>
        <ForecastContainer />
        {/*<div className="notes">*/}
        {/*<div className="notes__sidebar"></div>*/}
        {/*<div className="notes__content"></div>*/}
        {/*</div>*/}
      </div>
    );
  }
}
