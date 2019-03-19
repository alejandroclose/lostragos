// Dependencies
import React, { useEffect, useRef } from  'react';

// Components
import {
  NavElementWrapper,
  SubMenuWrapper,
  SubMenuElement
} from './navbarElement.style';
import { Link } from 'react-router-dom';

const NavbarElement = (props) => {
  const { handleToggle } = props;
  const navbarElement = props.data;

  // Set up eventListeners for outside-of-component clicks.
  useEffect(() => {
    if (navbarElement.isSubMenuOpen) {
      document.addEventListener('click', handleClick, false);
    }
    return () => {
      document.removeEventListener('click', handleClick, false);
    }
  }, [props.data.isSubMenuOpen]);

  const handleClick = (event) => {
    const { handleToggle, node } = props;
    if(!node.current.contains(event.target)) {
      handleToggle();
    }
  };

  const renderSubMenu = (subMenu) => (
    <SubMenuWrapper>
      {
        subMenu.map(subMenuElement => {
          return (
            <Link key={ subMenuElement.id } to={ subMenuElement.fullPath }>
              <SubMenuElement >
                { subMenuElement.name }
              </SubMenuElement>
            </Link>
          );
        })
      }
    </SubMenuWrapper>
  );

  return (
    <NavElementWrapper isActive={ navbarElement.isSubMenuOpen } onClick={ () => { handleToggle(navbarElement) } }>
      { navbarElement.name }
      {
        navbarElement.isSubMenuOpen && renderSubMenu(navbarElement.subMenu)
      }
    </NavElementWrapper>
  );
};

export default NavbarElement;
