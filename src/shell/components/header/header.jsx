// Dependencies
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import Brand from './brand/brand';
import Navbar from './navbar/navbar';

const HeaderWrapper = styled.div`
  height: 3rem;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Brand />
        <Navbar />
      </HeaderWrapper>
    );
  }
}

export default Header;
