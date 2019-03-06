import React, { Component } from 'react';
import './App.scss';

import Header from './shell/components/header/header';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
    );
  }
}

export default App;
