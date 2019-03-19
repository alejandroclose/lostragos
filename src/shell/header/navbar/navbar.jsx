// Dependencies
import React, { useState, useEffect, useRef } from 'react';

// Components
import NavbarElement from './navbarElement/navbarElement';
import { NavbarWrapper } from './navbar.style';

// Mocks
import { MOCK_NAVBAR_ELEMENTS } from 'mocks/mockNavbarElements';

const Navbar = () => {
  const [mockNavbarElements, setMockNavbarElements] = useState([]);
  const node = useRef();

  // Load NavbarElements into state on mount.
  useEffect(() => {
    setMockNavbarElements(MOCK_NAVBAR_ELEMENTS);
  }, []);

  const toggleSubMenus = (clickedNavbarElement = null) => {
    const newNavbarElements = mockNavbarElements.map(navbarElement => {
      if (clickedNavbarElement && clickedNavbarElement.id === navbarElement.id && !clickedNavbarElement.isSubMenuOpen) {
        navbarElement.isSubMenuOpen = true;
      } else {
        navbarElement.isSubMenuOpen = false;
      }
      return navbarElement;
    });
    setMockNavbarElements(newNavbarElements);
  };

  return (
    <NavbarWrapper ref={ node }>
      {
        mockNavbarElements.map(mockElement => {
          return <NavbarElement
            key={ mockElement.id }
            data={ mockElement }
            handleToggle={ toggleSubMenus }
            // Reference to NavbarWrapper
            node={ node } />
        })
      }
    </NavbarWrapper>
  );
}

export default Navbar;
