// Dependencies
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 2rem;
  color: ${props => props.theme.color.header.font};
  background: ${props => props.theme.color.header.background};
  border-bottom: 1px solid ${props => props.theme.color.header.border};
`;
