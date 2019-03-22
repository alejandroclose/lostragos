// Dependencies
import React, { useState, useEffect, useRef } from 'react';

// Components
import {
  SidebarWrapper,
  Wrapper,
  Icon,
  Brand,
  MoveInOut
} from './sidebar.style';
import SidebarElement from './sidebarElement/sidebarElement';
import { Link } from 'react-router-dom';

// Constants
import { MOCK_NAVBAR_ELEMENTS } from 'mocks/mockNavbarElements';

// Images
const brandHorizontal = require('assets/images/los-tragos-brand-white-small.png');

const Sidebar = () => {
  const [sidebarElements, setSidebarElements] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const node = useRef();

  // Load sidebarElements on mount.
  useEffect(() => {
    setSidebarElements(MOCK_NAVBAR_ELEMENTS);
  }, []);

  useEffect(() => {
    isSidebarOpen && document.addEventListener('click', handleClick, false);
    return () => {
      document.removeEventListener('click', handleClick, false);
    }
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
      toggleSubMenu();
    } else {
      setIsSidebarOpen(true);
    }
  };

  const handleClick = (event) => {
    if (node.current) {
      !node.current.contains(event.target) && toggleSidebar();
    }
  };

  const toggleSubMenu = (sidebarElement = null) => {
    const mockElements = MOCK_NAVBAR_ELEMENTS;
    const newSidebarElements = mockElements.map(element => {
      if (sidebarElement && element.id === sidebarElement.id) {
        element.isSubMenuOpen = !element.isSubMenuOpen;
      } else {
        element.isSubMenuOpen = false;
      }
      return element;
    });
    setSidebarElements(newSidebarElements);
  };

  const renderSidebar = (sidebarElements) => {
    return (
      <MoveInOut ref={ node } isActive={ isSidebarOpen }>
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
                  toggleSubMenu={ () => { toggleSubMenu(sidebarElement) } }
                  toggleSidebar={ toggleSidebar }
                />
              );
            })
          }
        </Wrapper>
      </MoveInOut>
    );
  };

  let icon = <span>&#9776;</span>;

  if (isSidebarOpen) {
    icon = <span>&#x2715;</span>;
  };

  return (
    <SidebarWrapper>
      {
        renderSidebar(sidebarElements)
      }
      <MoveInOut isActive={ isSidebarOpen }>
        <Icon onClick={ toggleSidebar } isActive={ isSidebarOpen }>{ icon }</Icon>
      </MoveInOut>
    </SidebarWrapper>
  );
};

export default Sidebar;
