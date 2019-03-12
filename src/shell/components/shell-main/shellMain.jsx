// Dependencies
import React from 'react';
import { ThemeProvider } from 'styled-components';

// Components
import Header from '../header/header';
import { ShellMainWrapper } from './shellMain.style'
import Footer from '../footer/footer';

// Constants
import THEME from 'theme/theme';

const ShellMain = (props) => (
  <ThemeProvider theme={THEME}>
    <ShellMainWrapper>
      <Header />
      { props.children }
      <Footer/>
    </ShellMainWrapper>
  </ThemeProvider>
);

export default ShellMain;
