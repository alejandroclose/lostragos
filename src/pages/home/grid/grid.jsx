// Dependencies
import React, { Component } from 'react';

// Components
import GridCard from './grid-card/gird-card'
import {StyledLink} from '../../../shared/components/'

//Mocks
import { MOCK_GRID_ELEMENTS } from 'mocks/mockGridElements';

class Grid extends Component {
  state = {
    mockGridElements: [],
  }

  componentDidMount = () => {
    this.setState({ mockGridElements: MOCK_GRID_ELEMENTS });
  }
  render() {
    const { mockGridElements } = this.state;
    return (
      // <GridWrapper>
      <div>
        {
          mockGridElements.map(gridElement => {
            return (
              <StyledLink to={gridElement.fullPath} key={gridElement.id}>
                  <GridCard
                    title={gridElement.title}
                    icon={gridElement.icon}
                    fullPath={gridElement.fullPath}>
                  </GridCard>
              </StyledLink>
            )
          })
        }

      </div>
        
      // </GridWrapper>
    )
  }
}

export default Grid;