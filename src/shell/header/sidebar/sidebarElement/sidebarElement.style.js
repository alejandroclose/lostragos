// Dependencies
import styled from 'styled-components';

// Components
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
  color: ${props => props.theme.color.header.font};
  border-bottom: 1px solid ${props => props.theme.color.header.border};

  &:hover {
    background: ${props => props.theme.color.header.backgroundActive};
  };
`;

export const Name = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  ${ props => props.active && 'margin-left: 1rem; margin-top: 1rem;' }
`;

export const SubMenuElement = styled(Link)`
  margin: 0.25rem;
`;
