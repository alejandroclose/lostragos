// Dependencies
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  color: ${props => props.theme.color.header.font};
  border-bottom: 1px solid ${props => props.theme.color.header.border};

  &:hover {
    background: ${props => props.theme.color.header.backgroundActive};
  };
`;
