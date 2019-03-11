// Dependencies
import React, { Component } from 'react';

// Components
import NavbarElement from './navbarElement/navbarElement';
import { NavbarWrapper } from './navbar.style';

// Constants

// Mocks
import { MOCK_NAVBAR_ELEMENTS } from '../../../../mocks/mockNavbarElements';

class Navbar extends Component {
  state = {

  };

  render() {
    return (
      <NavbarWrapper>
        {
          MOCK_NAVBAR_ELEMENTS.map(mockElement => {
            return <NavbarElement key={ mockElement.id } data={ mockElement } />
          })
        }
      </NavbarWrapper>
    );
  }
}

export default Navbar;
