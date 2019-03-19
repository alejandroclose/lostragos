// Dependencies
import styled from 'styled-components';

// Media queries
import { device } from 'theme/device';

export const NavbarWrapper = styled.div`
  display: none;
  height: 100%;
  margin-right: 1rem;

  @media ${device.tablet} {
    display: flex;
  }
`;
