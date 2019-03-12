// Dependencies
import React, { Component } from 'react';
import { ReactDOM } from 'react-dom';

// Components
import NavbarElement from './navbarElement/navbarElement';
import { NavbarWrapper } from './navbar.style';

// Mocks
import { MOCK_NAVBAR_ELEMENTS } from 'mocks/mockNavbarElements';

class Navbar extends Component {
  state = {
    mockNavbarElements: [],
  };

  componentDidMount = () => {
    // Loads mock data into state.
    this.setState({ mockNavbarElements: MOCK_NAVBAR_ELEMENTS });
  };

  toggleSubMenus = (clickedNavbarElement = null) => {
    console.log('Toggle submenus');
    const { mockNavbarElements } = this.state;

      mockNavbarElements.forEach(navbarElement => {
        if (clickedNavbarElement && clickedNavbarElement.id === navbarElement.id && !clickedNavbarElement.isSubMenuOpen) {
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
