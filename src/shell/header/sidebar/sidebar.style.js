// Dependencies
import styled from 'styled-components';

// Media queries
import { device } from 'theme/device';

export const Icon = styled.button`
  margin-left: 0.5rem;
  font-size: 1.5rem;
  background: none;
  border: none;
  &:hover {
    color: ${props => props.isActive && props.theme.color.shared.highlight};
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 2rem;
  display: flex;
  flex-direction: column;
  min-width: 10rem;
  background: ${props => props.theme.color.header.background};

  @media ${device.tablet} {
    display: none;
  }
`;
