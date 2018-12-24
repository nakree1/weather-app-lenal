import React from 'react';
import ForecastContainer from './Forecast/ForecastContainer';
import LocationContainer from './Location/LocationContainer';
import NotesContainer from './Notes/NotesContainer';
import Wrapper from './Wrapper/Wrapper';
import '../scss/index.scss';

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <LocationContainer />
        <ForecastContainer />
        <NotesContainer />
      </Wrapper>
    );
  }
}

export default App;
