// Dependencies
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import Navigation from './navigation/navigation';

const HeaderWrapper = styled.div`
  width: 100vw;
  background: grey;
  display: flex;
`

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <div>
          LOGO
        </div>
        <Navigation></Navigation>
      </HeaderWrapper>
    );
  }
}

export default Header;
