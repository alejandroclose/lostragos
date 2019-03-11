// Dependencies
import React from 'react';

// Components
import { Link } from 'react-router-dom';
import { StyledImg } from '../../../../shared';

const brandHorizontal = require('../../../../assets/images/logo-horizontal-navbar.svg');

const Brand = () => (
    <Link to="/">
      <StyledImg src={brandHorizontal} alt="losTRAGOS.com logo"></StyledImg>
    </Link>
);

export default Brand;
