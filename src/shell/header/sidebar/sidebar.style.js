// Dependencies
import styled from 'styled-components';

// Media queries
import { device } from 'theme/device';

export const Icon = styled.span`
  margin-left: 0.5rem;
  font-size: 1.5rem;

  @media ${device.tablet} {
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: none;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.color.header.background};
`;
