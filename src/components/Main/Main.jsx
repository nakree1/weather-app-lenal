import React from 'react';
import Forecast from '../Forecast/Forecast';
import LocationContainer from '../Location/LocationContainer';

export default class Main extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="main-form">
          <LocationContainer/>
        </div>
        <Forecast/>
        {/*<div className="notes">*/}
          {/*<div className="notes__sidebar"></div>*/}
          {/*<div className="notes__content"></div>*/}
        {/*</div>*/}
      </div>
    )
  }
}