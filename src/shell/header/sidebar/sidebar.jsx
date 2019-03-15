// Dependencies
import React, { Component } from 'react';

// Components
import {
  Icon,
  Wrapper,
  Brand
} from './sidebar.style';
import SidebarElement from './sidebarElement/sidebarElement';

// Constants
import { MOCK_NAVBAR_ELEMENTS } from 'mocks/mockNavbarElements';

// Images
const brandHorizontal = require('assets/images/los-tragos-brand-white-small.png');

class Sidebar extends Component {
  state = {
    sidebarElements: [],
    isSidebarOpen: false
  };

  componentWillMount() {
    this.setState({ sidebarElements: MOCK_NAVBAR_ELEMENTS });
  };

  toggleSidebar = () => {
    const { isSidebarOpen } = this.state;
    this.setState({ isSidebarOpen: !isSidebarOpen });
  };

  renderSidebar = (sidebarElements) => {
    return (
      <Wrapper>
        <Brand src={ brandHorizontal } alt="losTRAGOS.com logo in white" />
        {
          sidebarElements.map(sidebarElement => {
            return (
              <SidebarElement key={ sidebarElement.id} data={ sidebarElement } />
            );
          })
        }
      </Wrapper>
    );
  };

  render() {
    const { sidebarElements, isSidebarOpen } = this.state;
    let icon = <span>&#9776;</span>;

    if (isSidebarOpen) {
      icon = <span>&#x2715;</span>;
    };

    return (
      <React.Fragment>
        <Icon onClick={ this.toggleSidebar } isActive={ isSidebarOpen }>{ icon }</Icon>
          {
            isSidebarOpen && this.renderSidebar(sidebarElements)
          }
      </React.Fragment>
    );
  };
};

export default Sidebar;
