import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  /* padding: 0.75rem; */
  background: rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid #FFFFFF55;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${props => props.theme.sizeTablet}) {
    justify-content: center;
  }
`;
