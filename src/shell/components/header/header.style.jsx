// Dependencies
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  color: ${props => props.theme.colorHeaderFont};
  background: ${props => props.theme.headerBackground};
  border-bottom: 1px solid ${props => props.theme.colorHeaderBorder};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${props => props.theme.sizeTablet}) {
    justify-content: center;
  }
`;
