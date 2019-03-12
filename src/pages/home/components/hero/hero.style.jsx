// Dependencies
import styled from 'styled-components';

// Media queries
import { device } from 'theme/device';

export const HeroWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroImage = styled.img`
  position: absolute;
  object-fit: cover;
  height: 100%;
  width: 100%;
  z-index: -1;
`;

export const HeroLogoWrapper = styled.div`
  width: 75%;
  margin-top: 3.5rem;

  @media ${device.tablet} {
    width: 50%;
  }

  @media ${device.laptop} {
    width: 33%;
  }
`;
