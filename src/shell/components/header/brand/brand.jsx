// Dependencies
import React from 'react';

// Components
import { Link } from 'react-router-dom';
import {
  Wrapper,
  Img,
 } from './brand.style';

const brandHorizontal = require('assets/images/los-tragos-brand-white-small.png');

const Brand = () => (
  <Wrapper>
    <Link to="/">
      <Img src={brandHorizontal} alt="losTRAGOS.com logo"></Img>
    </Link>
  </Wrapper>
);

export default Brand;
