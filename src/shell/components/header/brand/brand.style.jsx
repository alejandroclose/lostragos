// Dependencies
import styled from 'styled-components';

export const BrandWrapper = styled.div`
  @media screen and (max-width: ${props => props.theme.sizeTablet}) {
    display: none;
  }
`;
