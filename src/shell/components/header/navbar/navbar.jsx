// Dependencies
import React, { Component } from 'react';

// Components
import NavbarElement from './navbarElement/navbarElement';
import { NavbarWrapper } from './navbar.style';

// Constants
import { ROUTE_CONSTANTS } from '../../../../shared';

class Navbar extends Component {
  state = {

  };

  render() {
    return (
      <NavbarWrapper>
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
      </NavbarWrapper>
    );
  }
}

export default Navbar;
