// Dependencies
import React from 'react';

// Components
import { StyledImg } from '../../../shared';
import {
  HeroWrapper,
  HeroLogoWrapper
} from './hero.style';

// Images
const heroLogo = require('../../../assets/images/lostragos-hero-logo.png');

const Hero = () => (
  <HeroWrapper>
    <HeroLogoWrapper>
      <StyledImg src={ heroLogo } alt="losTRAGOS.com logo" />
    </HeroLogoWrapper>
  </HeroWrapper>
);

export default Hero;
