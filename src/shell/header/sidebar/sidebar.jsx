// Dependencies
import React, { useState, useEffect, useRef } from 'react';

// Components
import {
  TestWrapper,
  Icon,
  Wrapper,
  Brand,
  MoveIn
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
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClick = (event) => {
    if (node.current) {
      !node.current.contains(event.target) && toggleSidebar();
    }
  };

  const toggleSubMenu = (sidebarElement) => {
    const mockElements = MOCK_NAVBAR_ELEMENTS;
    const newSidebarElements = mockElements.map(element => {
      if (element.id === sidebarElement.id) {
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
      <MoveIn ref={ node } isActive={ isSidebarOpen }>
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
      </MoveIn>
    );
  };

  let icon = <span>&#9776;</span>;

  if (isSidebarOpen) {
    icon = <span>&#x2715;</span>;
  };

  return (
    <TestWrapper>
      {
        isSidebarOpen && renderSidebar(sidebarElements)
        // renderSidebar(sidebarElements)
      }
      <Icon onClick={ toggleSidebar } isActive={ isSidebarOpen }>{ icon }</Icon>
    </TestWrapper>
  );
};

export default Sidebar;
