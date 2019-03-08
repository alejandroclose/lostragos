// Dependencies
import React from  'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNavLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  &:hover {
    background: rgba(0, 0, 0, 0.3);
    transition: background 500ms ease-out;
  }
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  color: #FFF;
`;

const NavbarElement = (props) => {
  const { to, children } = props;
  return (
    <StyledNavLinkWrapper>
      <StyledNavLink to={ to }>{ children }</StyledNavLink>
    </StyledNavLinkWrapper>
  );
}

export default NavbarElement;
