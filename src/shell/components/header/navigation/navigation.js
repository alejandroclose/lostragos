// Dependencies
import React from 'react';
import styled from 'styled-components';

// Components
import { Link } from 'react-router-dom';

// Constants
import ROUTE_CONSTANTS from '../../../constants/routes/route.constants';

const NavigationWrapper = styled.div`
  background: goldenrod;
`;

const NavigationList = styled.ul`
  display: flex;
  list-style: none;
`;

const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavigationList>
        <NavigationLink to={ ROUTE_CONSTANTS.RECETAS.RECETAS_MAIN.fullPath }>Recetas</NavigationLink>
        <NavigationLink to={ ROUTE_CONSTANTS.OCASIONES.OCASIONES_MAIN.fullPath }>Ocasiones</NavigationLink>
        <NavigationLink to={ ROUTE_CONSTANTS.BEBIDAS_ESPIRITUOSAS.BEBIDAS_ESPIRITUOSAS_MAIN.fullPath }>Bebidas espirituosas</NavigationLink>
        <NavigationLink to={ ROUTE_CONSTANTS.ACADEMIA.ACADEMIA_MAIN.fullPath }>Academia online</NavigationLink>
        <NavigationLink to={ ROUTE_CONSTANTS.LOGIN.LOGIN_MAIN.fullPath }>Acceder</NavigationLink>
      </NavigationList>
    </NavigationWrapper>
  );
}

export default Navigation;
