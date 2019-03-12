// Dependencies
import React from 'react';

// Components
import { StyledImg } from 'shared';
import {
  HeroWrapper,
  HeroImage,
  HeroLogoWrapper
} from './hero.style';
import CallToAction from './call-to-action/callToAction';

// Images
const heroBackground = require('assets/images/hero-background.jpg');
const heroLogo = require('assets/images/lostragos-hero-logo.png');

const Hero = () => (
  <HeroWrapper>
    <HeroImage src={ heroBackground } />
    <HeroLogoWrapper>
      <StyledImg src={ heroLogo } alt="losTRAGOS.com logo" />
    </HeroLogoWrapper>
    <CallToAction />
  </HeroWrapper>
);

export default Hero;
