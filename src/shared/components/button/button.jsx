// Dependencies
import React from 'react';

// Components
import { StyledButton } from './button.style';

export const Button = (props) => (
  <StyledButton onClick={props.onClick}>{ props.children }</StyledButton>
);
