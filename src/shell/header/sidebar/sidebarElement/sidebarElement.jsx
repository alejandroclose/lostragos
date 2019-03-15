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
      { sidebarElement.subMenu.length > 0 && <i>&#8964;</i>}
    </Wrapper>
  );
};

export default SidebarElement
