// Dependencies
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  color: ${props => props.theme.color.shared.highlight};
  border-bottom: 1px solid #FFF;
  &:hover {
    background: ${props => props.theme.color.sidebar.elementBackground};
  }
`;
