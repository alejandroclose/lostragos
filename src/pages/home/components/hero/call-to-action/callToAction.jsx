// Dependencies
import React from 'react';

// Components
import { Link } from 'react-router-dom';
import { Button } from 'shared';
import {
  Wrapper,
  Title
} from './callToAction.style';

// Constants
import { ROUTE_CONSTANTS } from 'shared';

const CallToAction = () => (
  <Wrapper>
    <Title>DESCUBRE AL BARMAN QUE LLEVAS DENTRO</Title>
    <Link to={ ROUTE_CONSTANTS.RECETAS.RECETAS_MAIN.fullPath }>
      <Button>Ver todas las recetas</Button>
    </Link>
  </Wrapper>
);

export default CallToAction;
