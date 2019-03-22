// Dependencies
import styled, { keyframes } from 'styled-components';

// Media queries
import { device } from 'theme/device';

export const SidebarWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Icon = styled.button`
  margin-top: 1rem;
  margin-left: 0.5rem;
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
  z-index: 2;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 66%;
  background: ${props => props.theme.color.header.backgroundActive};

  @media ${device.tablet} {
    display: none;
  }
`;

export const Brand = styled.img`
  width: 90%;
  margin: 0.75rem 0.5rem;
`;

export const BaseAnimation = styled.div`
  animation-duration: ${props => props.duration};
  animation-timing-function: ${props => props.timingFunction};
  animation-delay: ${props => props.delay};
  animation-iteration-count: ${props => props.iterationCount};
  animation-direction: ${props => props.direction};
  animation-fill-mode: ${props => props.fillMode};
  animation-play-state:  ${props => props.playState};
  display: ${props => props.display};
`;

BaseAnimation.defaultProps = {
  duration: '0.3s',
  timingFunction: 'ease',
  delay: '0s',
  iterationCount: '1',
  direction: 'normal',
  fillMode: 'both',
  playState: 'running',
  display: 'block'
}

// Props must be passed like this for keyframes to work.
const MoveInOutAnimation = (props) => keyframes`
  from {
    transform: ${props.isActive ? 'traslateX(0px)' : 'translateX(-1000px)'}
  }
  to {
    transform: ${props.isActive ? 'translateX(-1000px)' : 'translateX(0px)'}
  }
`;

export const MoveInOut = styled(BaseAnimation)`
  animation-name: ${MoveInOutAnimation}
`;
