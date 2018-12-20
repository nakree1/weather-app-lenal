import React from 'react';
import '../scss/index.scss';
import Main from './Main/Main';
import Wrapper from './Wrapper/Wrapper';

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Main/>
      </Wrapper>
    );
  }
}

export default App;
