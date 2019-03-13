// Dependencies
import React, { Component } from 'react';

// Components
import {
  Icon,
  Wrapper
} from './sidebar.style';

// Constants
import { MOCK_NAVBAR_ELEMENTS } from 'mocks/mockNavbarElements';

class Sidebar extends Component {
  state = {
    sidebarElements: [],
    isSidebarOpen: false
  };

  componentWillMount() {
    this.setState({ sidebarElements: MOCK_NAVBAR_ELEMENTS });
  };

  toggleSidebar = () => {
    console.log('CLICK');
    const { isSidebarOpen } = this.state;
    this.setState({ isSidebarOpen: !isSidebarOpen });
  };

  renderSidebar = (sidebarElements) => {
    console.log('RENDER SIDEBAR');
    return (
      <div>
        {
          sidebarElements.map(sidebarElement => {
            return (
              <div key={ sidebarElement.id}>
                { sidebarElement.name }
              </div>
            );
          })
        }
      </div>
    );
  };

  render() {
    const { sidebarElements, isSidebarOpen } = this.state;
    return (
      <React.Fragment>
        <Icon onClick={ this.toggleSidebar } isActive={ isSidebarOpen }>&#9776;</Icon>
        <Wrapper>
          {
            isSidebarOpen && this.renderSidebar(sidebarElements)
          }
        </Wrapper>
      </React.Fragment>
    );
  };
};

export default Sidebar;
