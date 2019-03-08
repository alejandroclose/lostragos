// Dependencies
import React from  'react';

// Components
import {
  StyledNavLinkWrapper,
  StyledNavLink
} from './navbar.style';

const NavbarElement = (props) => {
  const { to, children } = props;
  return (
    <StyledNavLinkWrapper>
      <StyledNavLink to={ to }>{ children }</StyledNavLink>
    </StyledNavLinkWrapper>
  );
};

export default NavbarElement;
