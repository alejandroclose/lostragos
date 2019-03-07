// Dependencies
import React from 'react';
import styled from 'styled-components';

const brandHorizontal = require('../../../../assets/images/logo-horizontal-navbar.svg');

const BrandWrapper = styled.div`
`

const Brand = () => (
  <BrandWrapper>
    <img src={brandHorizontal} alt="LosTRAGOS.com logo"></img>
  </BrandWrapper>
);

export default Brand;
