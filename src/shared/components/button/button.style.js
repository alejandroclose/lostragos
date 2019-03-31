// Dependencies
import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 0.25rem 0.75rem 0.25rem 0.75rem;
  color: #FFF;
  background: ${props => props.backgroundColor
    ? props.backgroundColor
    : props.theme.color.shared.highlight};

    &:hover {
      text-shaddow: 1px 1px #FFFFFF;
`;

