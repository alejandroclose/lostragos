// Dependencies
import styled from 'styled-components';

// Media queries
import { device } from 'theme/device';

export const Icon = styled.button`
  margin-left: ${props => props.isActive ? '70%' : '0.5rem'};
  font-size: 1.5rem;
  z-index: 3;
  background: none;
  border: none;
  color: ${props => props.theme.color.header.font};
  &:hover {
    color: ${props => props.isActive && props.theme.color.header.fontHover};
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  width: 66%;
  height: 100vh;
  background: ${props => props.theme.color.sidebar.background};

  @media ${device.tablet} {
    display: none;
  }
`;

export const Brand = styled.img`
  width: 90%;
  margin: 0.5rem;
`;
