// Dependencies
import React, { Component } from 'react';

// Components
import ShellMain from './shell/components/shell-main/shellMain';

// Global styles
import GlobalStyle from './global-styles';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <ShellMain></ShellMain>
      </React.Fragment>
    );
  }
}

export default App;
