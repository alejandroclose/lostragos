// Dependencies
import styled from 'styled-components';

// Media queries
import { device } from 'theme/device';

export const Wrapper = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
  }
`;

export const Img = styled.img`
  height: 2rem;
`;
