// Dependencies
import React from 'react';

// Components
import { StyledImg } from '../../../../shared';
import {
  HeroWrapper,
  HeroLogoWrapper
} from './hero.style';
import CallToAction from './call-to-action/callToAction';

// Images
const heroLogo = require('../../../../assets/images/lostragos-hero-logo.png');

const Hero = () => (
  <HeroWrapper>
    <HeroLogoWrapper>
      <StyledImg src={ heroLogo } alt="losTRAGOS.com logo" />
    </HeroLogoWrapper>
    <CallToAction />
  </HeroWrapper>
);

export default Hero;
