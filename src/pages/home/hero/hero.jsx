// Dependencies
import React from 'react';

// Components
import {
  Wrapper,
  LogoWrapper,
  Logo,
  BackgroundImg
} from './hero.style';
import CallToAction from './call-to-action/callToAction';

// Images
const heroLogo = require('assets/images/los-tragos-hero-logo-white.png');
const heroBackground = require('assets/images/hero-background.jpeg');

const Hero = () => (
  <Wrapper>
    <LogoWrapper>
      <Logo src={ heroLogo } alt="losTRAGOS.com logo" />
    </LogoWrapper>
    <CallToAction />
    <BackgroundImg src={ heroBackground } alt="Background image of barman serving cocktail" />
  </Wrapper>
);

export default Hero;
