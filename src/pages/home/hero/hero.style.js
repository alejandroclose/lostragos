// Dependencies
import styled from 'styled-components';

// Media queries
import { device } from 'theme/device';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const BackgroundImg = styled.img`
  position: absolute;
  top: 0;
  object-fit: cover;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0.75;
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
