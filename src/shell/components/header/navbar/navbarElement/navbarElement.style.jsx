// Dependencies
import styled from 'styled-components';

// Components
import { NavLink } from 'react-router-dom';

export const StyledNavLinkWrapper = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  height: 3rem;
  padding: 0 1rem;
  background: ${props => props.isActive && props.theme.colorHeaderBackgroundActive};
  &:hover {
    background: ${props => props.theme.colorHeaderBackgroundActive};
    transition: background 500ms ease-out;
  }

  @media screen and (max-width: ${props => props.theme.sizeTablet}){
    display: none;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

export const SubMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 3rem;
  left: 0;
  background: ${props => props.theme.colorHeaderBackground};
`;

export const SubMenuElement = styled.div`
  padding: 0.75rem;
  white-space: nowrap;
  /* border-bottom: 1px solid ${props => props.theme.colorHeaderBorder}; */
  &:hover {
    background: ${props => props.theme.colorHeaderBackgroundActive};
    transition: background 500ms ease-out;
  }
  &:last-child {
    border-bottom: none;
  }
`;
