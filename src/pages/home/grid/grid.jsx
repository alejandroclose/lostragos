// Dependencies
import React, { Component } from 'react';

// Components
import GridCard from './grid-card/gird-card'
import { StyledLink } from '../../../shared/components/'
import { GridWrapper, GridCards } from './grid.style'
import { Button } from 'shared';

//Mocks
import { MOCK_GRID_ELEMENTS } from 'mocks/mockGridElements';

class Grid extends Component {
  state = {
    mockGridElements: [],
    gridItemsLength: 0,
    showCards: 4,
    buttonText: "Ver más categorias"
  }

  componentDidMount = () => {
    this.setState({ mockGridElements: MOCK_GRID_ELEMENTS });
  }

  handleClick = (e) => {
    this.setState({
      showCards: this.state.gridItemsLength
    });
  }
  render() {
    const { mockGridElements } = this.state;
    this.state.gridItemsLength = mockGridElements.length;
    return (
      <GridWrapper>
        <GridCards>
          {
            mockGridElements.slice(0, this.state.showCards).map(gridElement => {
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
        </GridCards>
        <Button onClick={this.handleClick}>Ver todas las categorías</Button>
      </GridWrapper>
    )
  }
}

export default Grid;