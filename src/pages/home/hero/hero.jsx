// Dependencies
import React from 'react';

// Components
import {
  Wrapper,
  BackgroundImg,
  LogoWrapper,
  Logo
} from './hero.style';
import CallToAction from './call-to-action/callToAction';

// Images
const heroBackground = require('assets/images/hero-background.jpg');
const heroLogo = require('assets/images/lostragos-hero-logo.png');

const Hero = () => (
  <Wrapper>
    <BackgroundImg src={ heroBackground } />
    <LogoWrapper>
      <Logo src={ heroLogo } alt="losTRAGOS.com logo" />
    </LogoWrapper>
    <CallToAction />
  </Wrapper>
);

export default Hero;
