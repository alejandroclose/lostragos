// Dependencies
import React, { Component } from 'react';

// Components
import {
  Route,
  Switch } from 'react-router-dom';
import ShellMain from './shell/shell-main/shellMain';
import {
  Home,
  NotFound } from './pages';

// Global styles
import GlobalStyle from './theme/global-styles';

class App extends Component {
  render() {
    return (
      <ShellMain>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route component={ NotFound } />
        </Switch>
      </ShellMain>
    );
  }
}

export default App;
