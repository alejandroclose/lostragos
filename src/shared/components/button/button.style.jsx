// Dependencies
import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 0.25rem;
  border-radius: 5px;
  background: ${props => props.backgroundColor ? props.backgroundColor : props.theme.colorHighlight};
`;
