import React, { Component } from 'react';
import './App.scss';

import Header from './shell/components/header/header';
import Footer from './shell/components/footer/footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
