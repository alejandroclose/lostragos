// Dependencies
import React from 'react';

// Components
import {
  Wrapper,
  LogoWrapper,
  Logo,
  ArrowLink,
  OpacityLayer,
  BackgroundImg
} from './hero.style';
import CallToAction from './call-to-action/callToAction';

// Images
const heroLogo = require('assets/images/los-tragos-hero-logo-white.png');
const heroBackground = require('assets/images/hero-background2.jpg');

const Hero = () => (
  <Wrapper>
    <LogoWrapper>
      <Logo src={ heroLogo } alt="losTRAGOS.com logo" />
    </LogoWrapper>
    <CallToAction />
    <ArrowLink>V</ArrowLink>
    <OpacityLayer />
    <BackgroundImg src={ heroBackground } alt="Background image of spirit bottles lined up" />
  </Wrapper>
);

export default Hero;
