// Dependencies
import React, { Component } from  'react';

// Components
import {
  StyledNavLinkWrapper,
  StyledNavLink
} from './navbarElement.style';

class NavbarElement extends Component {
  state = {
    isOpen: false,
  }

  toggleOpenClose = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;
    const { to, children } = this.props;
    let element;

    if (isOpen) {
      element = <StyledNavLink to={ to }>{ children }</StyledNavLink>
    } else {
      element = <p>Closed</p>
    }

    return (
      <StyledNavLinkWrapper onClick={ this.toggleOpenClose }>
        { element }
      </StyledNavLinkWrapper>
    );
  }
};

export default NavbarElement;
