// Dependencies
import React, { Component } from  'react';

// Components
import {
  StyledNavLinkWrapper,
  SubMenuWrapper,
  SubMenuElement
} from './navbarElement.style';
import { Link } from 'react-router-dom';

class NavbarElement extends Component {

  renderSubMenu = (subMenu) => (
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

  render() {
    const { handleToggle } = this.props;
    const navbarElement = this.props.data;

    return (
      <StyledNavLinkWrapper isActive={ navbarElement.isSubMenuOpen } onClick={ () => { handleToggle(navbarElement) }}>
        { navbarElement.name }
        {
          navbarElement.isSubMenuOpen && this.renderSubMenu(navbarElement.subMenu)
        }
      </StyledNavLinkWrapper>
    );
  }
};

export default NavbarElement;
