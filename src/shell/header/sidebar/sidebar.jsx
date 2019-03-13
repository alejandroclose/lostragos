// Dependencies
import React, { Component } from 'react';

// Components
import { Icon } from './sidebar.style';

class Sidebar extends Component {
  state = {
    isSidebarOpen: false
  }

  render() {
    return (
      <Icon>&#9776;</Icon>
    )
  }
}

export default Sidebar;
