// Dependencies
import React, { Component } from 'react';

// Components
import { GridWrapper, GridCards } from './grid.style'
import { Button, Card, StyledLink } from 'shared';

//Mocks
import { MOCK_GRID_ELEMENTS } from 'mocks/mockGridElements';

class Grid extends Component {
  state = {
    mockGridElements: [],
    gridItemsLength: 0,
    showCards: 4,
    isGridOpen: false,
    }
  componentWillMount = () => {
    this.setState({ mockGridElements: MOCK_GRID_ELEMENTS });
  }

  handleClick = (e) => {
    if (this.state.showCards > 4) {
      this.setState({
        showCards: 4
      })
    }
    else {
      this.setState({
        showCards: this.state.gridItemsLength
      });
    }
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
                  <Card
                    title={gridElement.title}
                    icon={gridElement.icon}
                    fullPath={gridElement.fullPath}
                    theme={"red-box"}>
                  </Card>
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