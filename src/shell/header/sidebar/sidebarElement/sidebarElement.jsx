// Dependencies
import React from 'react';

// Components
import {
  Wrapper
} from './sidebarElement.style';

const SidebarElement = (props) => {
  const sidebarElement = props.data;
  return (
    <Wrapper>
      { sidebarElement.name }
    </Wrapper>
  );
};

export default SidebarElement
