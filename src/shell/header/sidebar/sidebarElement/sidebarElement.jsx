// Dependencies
import React from 'react';

// Components
import {
  Wrapper,
  Name,
  SubMenu,
  SubMenuElement
} from './sidebarElement.style';

// Constants
import { ROUTE_CONSTANTS } from 'shared';

const SidebarElement = (props) => {
  const { toggleSidebar, toggleSubMenu } = props;
  const sidebarElement = props.data;

  const renderSubMenu = () => (
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
  );

  return (
    <Wrapper onClick={ toggleSubMenu }>
      <Name>
        { sidebarElement.name }
        { sidebarElement.subMenu.length > 0 && <i>&#8964;</i> }
      </Name>
      <SubMenu active={ sidebarElement.isSubMenuOpen }>
        { sidebarElement.isSubMenuOpen && renderSubMenu() }
      </SubMenu>
    </Wrapper>
  );
};

export default SidebarElement
