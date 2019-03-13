// Dependencies
import styled from 'styled-components';

// Media queries
import { device } from 'theme/device';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackgroundImg = styled.img`
  position: absolute;
  object-fit: cover;
  height: 100%;
  width: 100%;
  z-index: -1;
`;

export const LogoWrapper = styled.div`
  width: 75%;
  margin-top: 3.5rem;

  @media ${device.tablet} {
    width: 50%;
  }

  @media ${device.laptop} {
    width: 33%;
  }
`;

export const Logo = styled.img`
  width: 100%;
`;
