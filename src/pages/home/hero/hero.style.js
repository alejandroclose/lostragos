// Dependencies
import styled from 'styled-components';

// Media queries
import { device } from 'theme/device';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const OpacityLayer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: #000;
  opacity: 0.5;
  z-index: -1;
`;

export const BackgroundImg = styled.img`
  position: absolute;
  top: 0;
  object-fit: cover;
  height: 100%;
  width: 100%;
  z-index: -2;
  opacity: 1;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 15vh;
`;

export const Logo = styled.img`
  max-width: 40%;

  @media ${device.tablet} {
    max-width: 15rem;
  }
`;
