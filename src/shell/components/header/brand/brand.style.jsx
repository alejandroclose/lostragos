// Dependencies
import styled from 'styled-components';

// Media queries
import { device } from 'theme/device';

export const BrandWrapper = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
  }
`;
