// Dependencies
import React from 'react';

// Components
import { Link } from 'react-router-dom';
import { StyledImg } from 'shared';
import { BrandWrapper } from './brand.style';

const brandHorizontal = require('../../../../assets/images/logo-horizontal-navbar.svg');

const Brand = () => (
  <BrandWrapper>
    <Link to="/">
      <StyledImg src={brandHorizontal} alt="losTRAGOS.com logo"></StyledImg>
    </Link>
  </BrandWrapper>
);

export default Brand;
