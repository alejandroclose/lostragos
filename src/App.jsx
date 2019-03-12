// Dependencies
import React, { Component } from 'react';
// Components
import ShellMain from './shell/components/shell-main/shellMain';
import { Home } from './pages';

// Global styles
import GlobalStyle from './theme/global-styles';

class App extends Component {
  render() {
    return (
      <ShellMain>
        <GlobalStyle />
        <Home />
      </ShellMain>
    );
  }
}

export default App;
