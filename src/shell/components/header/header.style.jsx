import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  padding: 0.75rem;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${props => props.theme.sizeTablet}) {
    justify-content: center;
  }
`;
