// Dependencies
import styled from 'styled-components';

// Components
import { NavLink } from 'react-router-dom';

export const StyledNavLinkWrapper = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  color: #FFF;
  position: relative;
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
  text-transform: uppercase;
  color: #FFF;
`;

export const SubMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 3rem;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
`;

export const SubMenuElement = styled.div`
  color: #FFF;
`;
