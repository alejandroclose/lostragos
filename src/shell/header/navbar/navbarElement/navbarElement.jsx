// Dependencies
import React, { Component } from  'react';
import ReactDOM from 'react-dom';

// Components
import {
  NavElementWrapper,
  SubMenuWrapper,
  SubMenuElement
} from './navbarElement.style';
import { Link } from 'react-router-dom';

class NavbarElement extends Component {

  // Set up eventListeners for outside-of-component clicks.
  componentDidUpdate() {
    const navbarElement = this.props.data;
    if (navbarElement.isSubMenuOpen) {
      document.addEventListener('click', this.handleClick, false);
    } else {
      document.removeEventListener('click', this.handleClick, false);
    };
  };

  handleClick = (event) => {
    const { handleToggle } = this.props;
    if(!ReactDOM.findDOMNode(this).contains(event.target)) {
      handleToggle();
    }
  };

  renderSubMenu = (subMenu) => (
    <SubMenuWrapper>
      {
        subMenu.map(subMenuElement => {
          return (
            <Link key={ subMenuElement.id } to={ subMenuElement.fullPath }>
              <SubMenuElement >
                { subMenuElement.name }
              </SubMenuElement>
            </Link>
          );
        })
      }
    </SubMenuWrapper>
  );

  render() {
    const { handleToggle } = this.props;
    const navbarElement = this.props.data;

    return (
      <NavElementWrapper isActive={ navbarElement.isSubMenuOpen } onClick={ () => { handleToggle(navbarElement) }}>
        { navbarElement.name }
        {
          navbarElement.isSubMenuOpen && this.renderSubMenu(navbarElement.subMenu)
        }
      </NavElementWrapper>
    );
  }
};

export default NavbarElement;
