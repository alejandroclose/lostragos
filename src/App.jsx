// Dependencies
import React, { Component } from 'react';

// Components
import ShellMain from './shell/components/shell-main/shellMain';

// Global styles
import GlobalStyle from './theme/global-styles';

class App extends Component {
  render() {
    return (
      <div>
          <GlobalStyle />
        <ShellMain>
          <h1>
            Hello, friend!
          </h1>
        </ShellMain>
      </div>
    );
  }
}

export default App;
