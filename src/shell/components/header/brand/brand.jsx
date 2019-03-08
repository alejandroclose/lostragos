// Dependencies
import React from 'react';

// Components
import { Link } from 'react-router-dom';

const brandHorizontal = require('../../../../assets/images/logo-horizontal-navbar.svg');

const Brand = () => (
    <Link to="/">
      <img src={brandHorizontal} alt="losTRAGOS.com logo"></img>
    </Link>
);

export default Brand;
