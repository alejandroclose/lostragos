// Dependencies
import React, { Component } from  'react';

// Components
import {
  StyledNavLinkWrapper,
  StyledNavLink,
  SubMenuWrapper,
  SubMenuElement
} from './navbarElement.style';

class NavbarElement extends Component {

  renderSubMenu = (subMenu) => (
    <SubMenuWrapper>
      {
        subMenu.map(subMenuElement => {
          return (
            <SubMenuElement key={ subMenuElement.id }>
              <StyledNavLink to={ subMenuElement.fullPath }>{ subMenuElement.name }</StyledNavLink>
            </SubMenuElement>
          );
        })
      }
    </SubMenuWrapper>
  );

  render() {
    const { handleToggle } = this.props;
    const navbarElement = this.props.data;

    return (
      <StyledNavLinkWrapper onClick={ () => { handleToggle(navbarElement) }}>
        { navbarElement.name }
        {
          navbarElement.isSubMenuOpen && this.renderSubMenu(navbarElement.subMenu)
        }
      </StyledNavLinkWrapper>
    );
  }
};

export default NavbarElement;
