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
    mockNavbarElements: [],
  };

  componentDidMount = () => {
    this.setState({ mockNavbarElements: MOCK_NAVBAR_ELEMENTS });
  }

  toggleSubMenus = (clickedNavbarElement) => {
    const { mockNavbarElements } = this.state;

    mockNavbarElements.forEach(navbarElement => {
      if (clickedNavbarElement.isSubMenuOpen === false && clickedNavbarElement.id === navbarElement.id) {
        navbarElement.isSubMenuOpen = true;
      } else {
        navbarElement.isSubMenuOpen = false;
      }
    });
    this.setState({ mockNavbarElements });
  }

  render() {
    const { mockNavbarElements } = this.state;
    return (
      <NavbarWrapper>
        {
          mockNavbarElements.map(mockElement => {
            return <NavbarElement
              key={ mockElement.id }
              data={ mockElement }
              handleToggle={ this.toggleSubMenus } />
          })
        }
      </NavbarWrapper>
    );
  }
}

export default Navbar;
