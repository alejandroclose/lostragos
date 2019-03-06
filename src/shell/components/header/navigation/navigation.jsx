// Dependencies
import React from 'react';
import styled from 'styled-components';

// Components
import { StyledLink } from '../../../../shared';

// Constants
import { ROUTE_CONSTANTS } from '../../../../shared';

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
        <StyledLink to={ ROUTE_CONSTANTS.RECETAS.RECETAS_MAIN.fullPath }>Recetas</StyledLink>
        <StyledLink to={ ROUTE_CONSTANTS.OCASIONES.OCASIONES_MAIN.fullPath }>Ocasiones</StyledLink>
        <StyledLink to={ ROUTE_CONSTANTS.BEBIDAS_ESPIRITUOSAS.BEBIDAS_ESPIRITUOSAS_MAIN.fullPath }>Bebidas espirituosas</StyledLink>
        <StyledLink to={ ROUTE_CONSTANTS.ACADEMIA.ACADEMIA_MAIN.fullPath }>Academia online</StyledLink>
        <StyledLink to={ ROUTE_CONSTANTS.LOGIN.LOGIN_MAIN.fullPath }>Acceder</StyledLink>
      </NavigationList>
    </NavigationWrapper>
  );
}

export default Navigation;
