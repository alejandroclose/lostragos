// Dependencies
import React, { Component } from 'react';

// Components
import {
  Wrapper,
  Name,
  SubMenu,
  SubMenuElement
} from './sidebarElement.style';

// Constants
import { ROUTE_CONSTANTS } from 'shared';

class SidebarElement extends Component {

  renderSubMenu = () => {
    const { toggleSidebar } = this.props;
    const sidebarElement = this.props.data;

    return (
      <React.Fragment>
        {
          sidebarElement.subMenu.map((subMenuElement, index) => {
            if (index < 6) {
              return (
                <SubMenuElement
                  key={ subMenuElement.id }
                  to={ subMenuElement.fullPath}
                  onClick={ toggleSidebar }>
                    { subMenuElement.name }
                </SubMenuElement>
              );
            } else if (index === 6) {
              return (
                <SubMenuElement
                  key={ 99 }
                  to={ ROUTE_CONSTANTS.BEBIDAS_ESPIRITUOSAS.BEBIDAS_ESPIRITUOSAS_MAIN.fullPath}
                  onClick={ toggleSidebar }>
                  <span>Ver más...</span>
                </SubMenuElement>
              );
            } else {
              return null;
            }
          })
        }
      </React.Fragment>
    )
  };

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
