// Dependencies
import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 0.75rem;
  border-radius: 5px;
  color: #FFF;
  background: ${props => props.backgroundColor
    ? props.backgroundColor
    : props.theme.color.shared.highlight};
`;
