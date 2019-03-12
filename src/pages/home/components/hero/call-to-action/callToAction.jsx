// Dependencies
import React from 'react';

// Components
import { Link } from 'react-router-dom';
import { CallToActionWrapper } from './callToAction.style';
import { Button } from 'shared';

// Constants
import { ROUTE_CONSTANTS } from 'shared';

const CallToAction = () => (
  <CallToActionWrapper>
    <h3>DESCUBRE AL BARMAN QUE LLEVAS DENTRO</h3>
    <Link to={ ROUTE_CONSTANTS.RECETAS.RECETAS_MAIN.fullPath }>
      <Button>Ver todas las recetas</Button>
    </Link>
  </CallToActionWrapper>
);

export default CallToAction;
