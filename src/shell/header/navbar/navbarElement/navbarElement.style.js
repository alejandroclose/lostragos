// Dependencies
import styled from 'styled-components';

export const NavElementWrapper = styled.button`
  align-items: center;
  position: relative;
  height: 3rem;
  padding: 0 1rem;
  background: ${props => props.isActive && props.theme.color.header.backgroundActive};
  &:hover {
    background: ${props => props.theme.color.header.backgroundActive};
    transition: background 500ms ease-out;
  }
`;

export const SubMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 3rem;
  left: 0;
  background: ${props => props.theme.color.header.background};
`;

export const SubMenuElement = styled.div`
  padding: 0.75rem;
  white-space: nowrap;
  /* border-bottom: 1px solid ${props => props.theme.colorHeaderBorder}; */
  &:hover {
    background: ${props => props.theme.color.header.backgroundActive};
    transition: background 500ms ease-out;
  }
  &:last-child {
    border-bottom: none;
  }
`;
