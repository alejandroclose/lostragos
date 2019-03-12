// Dependencies
import React from 'react';
import { ThemeProvider } from 'styled-components';

// Components
import Header from '../header/header';
import { ShellMainWrapper } from './shellMain.style'

// Constants
import THEME from 'theme/theme';

const ShellMain = (props) => (
  <ThemeProvider theme={THEME}>
    <ShellMainWrapper>
      <Header />
      { props.children }
    </ShellMainWrapper>
  </ThemeProvider>
);

export default ShellMain;
