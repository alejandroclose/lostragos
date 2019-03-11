// Dependencies
import React, { Component } from  'react';

// Components
import { Link } from 'react-router-dom';
import {
  StyledNavLinkWrapper,
  StyledNavLink,
  SubMenuWrapper,
  SubMenuElement
} from './navbarElement.style';

class NavbarElement extends Component {
  state = {
    isOpen: false,
  };

  toggleOpenClose = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

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
    const { isOpen } = this.state;
    const navbarElement = this.props.data;

    return (
      <StyledNavLinkWrapper onClick={ this.toggleOpenClose }>
        { navbarElement.name }
        {
          isOpen && this.renderSubMenu(navbarElement.subMenu)
        }
      </StyledNavLinkWrapper>
    );
  }
};

export default NavbarElement;
