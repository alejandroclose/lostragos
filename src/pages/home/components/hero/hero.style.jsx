// Dependencies
import styled from 'styled-components';

// Images
const heroBackground = require('../../../../assets/images/hero-background.jpg');

export const HeroWrapper = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: top/cover no-repeat url(${heroBackground});
`;

export const HeroLogoWrapper = styled.div`
  width: 50%;
  margin-top: 3.5rem;
`;
