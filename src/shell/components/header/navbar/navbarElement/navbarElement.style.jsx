// Dependencies
import styled from 'styled-components';

// Components
import { NavLink } from 'react-router-dom';

export const StyledNavLinkWrapper = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  color: #FFF;
  position: relative;
  background: ${props => props.isActive && 'rgba(0, 0, 0, 0.3)'};
  &:hover {
    background: rgba(0, 0, 0, 0.3);
    transition: background 500ms ease-out;
  }

  @media screen and (max-width: ${props => props.theme.sizeTablet}){
    display: none;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #FFF;
`;

export const SubMenuWrapper = styled.div`
  display: flex;
  width: auto;
  flex-direction: column;
  position: absolute;
  top: 3rem;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
`;

export const SubMenuElement = styled.div`
  padding: 0.75rem;
  color: #FFF;
  border-bottom: 1px solid #FFFFFF22;
  white-space: nowrap;
  &:hover {
    background: rgba(0, 0, 0, 0.3);
    transition: background 500ms ease-out;
  }
`;
