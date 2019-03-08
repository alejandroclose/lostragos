// Dependencies
import React, { Component } from 'react';

// Components
import Brand from './brand/brand';
import Navbar from './navbar/navbar';
import { HeaderWrapper } from './header.style';

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
