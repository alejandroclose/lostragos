// Dependencies
import React, { Component } from 'react';

// Components
import {
  Icon,
  Wrapper,
  Brand
} from './sidebar.style';
import SidebarElement from './sidebarElement/sidebarElement';
import { Link } from 'react-router-dom';

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
    console.log('TOGGLE SB: ', this.state.sidebarElements);
    const { isSidebarOpen } = this.state;
    this.setState({
      isSidebarOpen: !isSidebarOpen,
      sidebarElements: MOCK_NAVBAR_ELEMENTS
    });
  };

  toggleSubMenu = (sidebarElement) => {
    console.log('TOGGLE SM: ', this.state.sidebarElements);
    const sidebarElements = MOCK_NAVBAR_ELEMENTS;
    const newSidebarElements = sidebarElements.map(element => {
      if (element.id === sidebarElement.id) {
        element.isSubMenuOpen = !element.isSubMenuOpen;
      }
      return element;
    });

    this.setState({
      sidebarElements: newSidebarElements
    }, console.log('AFTER: ', this.state.sidebarElements));
  };

  renderSidebar = (sidebarElements) => {
    return (
      <Wrapper>
        <Link to={'/'}>
          <Brand src={ brandHorizontal } alt="losTRAGOS.com logo in white" />
        </Link>
        {
          sidebarElements.map(sidebarElement => {
            return (
              <SidebarElement
                key={ sidebarElement.id }
                data={ sidebarElement }
                toggleSubMenu={ () => { this.toggleSubMenu(sidebarElement) } }
                toggleSidebar={ this.toggleSidebar }
              />
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
