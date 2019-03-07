// Dependencies
import React from 'react';
import styled from 'styled-components';

// Components
import Header from '../header/header';

const ShellMainWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: papayawhip;
`;

const ShellMain = (props) => (
  <ShellMainWrapper>
    <Header />
    { props.children }
  </ShellMainWrapper>
);

export default ShellMain;
