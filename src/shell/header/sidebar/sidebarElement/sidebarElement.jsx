// Dependencies
import React, { Component } from 'react';

// Components
import {
  Wrapper,
  Name,
  SubMenu,
  SubMenuElement
} from './sidebarElement.style';

class SidebarElement extends Component {

  renderSubMenu = () => {
    const { toggleSidebar } = this.props;
    const sidebarElement = this.props.data;

    console.log('RENDER SUBMENU');
    return (
      <React.Fragment>
        {
          sidebarElement.subMenu.map(subMenuElement => {
            return (
              <SubMenuElement
                key={ subMenuElement.id }
                to={ subMenuElement.fullPath}
                onClick={ toggleSidebar }>
                  { subMenuElement.name }
              </SubMenuElement>
            )
          })
        }
      </React.Fragment>
    )
  }

  render() {
    const { toggleSubMenu } = this.props;
    const sidebarElement = this.props.data;

    return (
      <Wrapper onClick={ toggleSubMenu }>
        <Name>
          { sidebarElement.name }
          { sidebarElement.subMenu.length > 0 && <i>&#8964;</i> }
        </Name>
        <SubMenu active={ sidebarElement.isSubMenuOpen }>
          { sidebarElement.isSubMenuOpen && this.renderSubMenu() }
        </SubMenu>
      </Wrapper>
    );
  }
};

export default SidebarElement
