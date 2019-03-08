// Dependencies
import React from 'react';
import styled from 'styled-components';

// Components
import NavbarElement from './navbarElement';

// Constants
import { ROUTE_CONSTANTS } from '../../../../shared';

const NavigationWrapper = styled.div`
  display: flex;
  height: 100%;
  margin-right: 1rem;
`;

const Navbar = () => {
  return (
    <NavigationWrapper>
      <NavbarElement uppercase to={ ROUTE_CONSTANTS.RECETAS.RECETAS_MAIN.fullPath }>
        Recetas
      </NavbarElement>
      <NavbarElement uppercase to={ ROUTE_CONSTANTS.OCASIONES.OCASIONES_MAIN.fullPath }>
        Ocasiones
      </NavbarElement>
      <NavbarElement uppercase to={ ROUTE_CONSTANTS.BEBIDAS_ESPIRITUOSAS.BEBIDAS_ESPIRITUOSAS_MAIN.fullPath }>
        Bebidas espirituosas
      </NavbarElement>
      <NavbarElement uppercase to={ ROUTE_CONSTANTS.ACADEMIA.ACADEMIA_MAIN.fullPath }>
        Academia online
      </NavbarElement>
      <NavbarElement uppercase to={ ROUTE_CONSTANTS.LOGIN.LOGIN_MAIN.fullPath }>
        Acceder
      </NavbarElement>
    </NavigationWrapper>
  );
}

export default Navbar;
